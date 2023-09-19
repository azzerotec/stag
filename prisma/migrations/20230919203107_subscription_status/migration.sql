/*
  Warnings:

  - You are about to drop the column `subscriptionActive` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "customerId" TEXT,
    "subscriptionId" TEXT,
    "priceId" TEXT,
    "subscriptionStatus" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "birthdate" DATETIME,
    "cpf" TEXT,
    "oab" TEXT NOT NULL
);
INSERT INTO "new_User" ("birthdate", "cpf", "createdAt", "customerId", "email", "id", "name", "oab", "priceId", "subscriptionId", "updatedAt") SELECT "birthdate", "cpf", "createdAt", "customerId", "email", "id", "name", "oab", "priceId", "subscriptionId", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_subscriptionId_key" ON "User"("subscriptionId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
