// Arrange - setup the app's inital state
// 1. visit a page
// 2. find an element
// Act - ask the app to perform some actions
// 3. interact with the element
// Asset - make an assertion
// 4. make an assertion about the changes
describe("First test", function () {
  it("Visits the SignUp page", function () {
    cy.visit("http://localhost:3000/signup");
    cy.contains("Browse Projects").click();

    cy.url().should("include", "/projects");
  });
});
