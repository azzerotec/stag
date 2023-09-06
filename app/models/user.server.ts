import type { Password, User } from "@prisma/client";
import bcrypt from "bcryptjs";

import { prisma } from "~/db.server";
import { createCustomer } from "~/stripe.server";

export type { User } from "@prisma/client";

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(
  oab: User["oab"],
  name: User["name"],
  email: User["email"],
  password: string
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const customer = await createCustomer({ email, name });

  return prisma.user.create({
    data: {
      oab,
      name,
      email,
      customerId: customer.id,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });
}

export function registerSubscription(
  id: User["id"],
  subscriptionId: User["subscriptionId"],
  priceId: User["priceId"]
) {
  return prisma.user.update({
    where: { id },
    data: {
      subscriptionId,
      priceId,
    },
  });
}

export async function deleteUserByEmail(email: User["email"]) {
  return prisma.user.delete({ where: { email } });
}

export async function verifyLogin(
  email: User["email"],
  password: Password["hash"]
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash
  );

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}
