describe("Access", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });
});

describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");

    cy.get("header");
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  });

  it("should prohibit user to log in with invalid email format", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("helloexample.com")
      .should("have.value", "helloexample.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    cy.get("div").contains("Invalid email address format");
  });
});

describe("Authenticated visit", () => {
  before("login", () => {
    cy.visit("http://localhost:5173/login");

    cy.get("input#email").type("hello@example.com");

    cy.get("input#password").type("123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");
  });

  it("should allow an autenticated user to view overview page dashboard", () => {
    cy.visit("http://localhost:5173/");

    cy.get("nav")
      .get("a")
      .contains("Overview")
      .parent()
      .should("have.class", "bg-primary");
  });
});
