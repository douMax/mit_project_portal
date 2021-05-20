// Arrange - setup the app's inital state
// 1. visit a page
// 2. find an element
// Act - ask the app to perform some actions
// 3. interact with the element
// Asset - make an assertion
// 4. make an assertion about the changes
describe("landing page test", function () {
  it("renders signup page correctly", function () {
    cy.visit("/login");
    cy.get("form").should("exist");
    cy.get("#username").should("exist").type("mit192942@stud.mit.edu.au");
    cy.get("#password").should("exist").type("xxxxxxxx");
  });

  it("Visits signup page", function () {
    cy.contains("Signup").click();
    cy.url().should("include", "/signup");
  });
});
