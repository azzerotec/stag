import { faker } from "@faker-js/faker";

describe("smoke tests", () => {
  afterEach(() => {
    cy.cleanupUser();
  });

  it("should allow you to register and login", () => {
    const loginForm = {
      oab: faker.string.numeric({ length: 10 }),
      name: faker.person.fullName(),
      email: `${faker.internet.userName()}@example.com`,
      password: faker.internet.password(),
    };

    cy.then(() => ({ email: loginForm.email })).as("user");

    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /Criar conta/i }).click();

    cy.findByRole("textbox", { name: /Nome completo/i }).type(loginForm.name);
    cy.findByRole("textbox", { name: /Oab/i }).type(loginForm.oab);
    cy.findByRole("textbox", { name: /E-mail/i }).type(loginForm.email);
    cy.findByLabelText(/Senha/i).type(loginForm.password);
    cy.findByRole("button", { name: /Criar conta/i }).click();

    cy.findByRole("link", { name: /logout/i }).click();
    cy.findByRole("button", { name: /Entrar/i });
  });
});
