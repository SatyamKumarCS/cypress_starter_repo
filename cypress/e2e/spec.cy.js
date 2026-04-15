describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  }),
    it("Input Box", () => {
      cy.visit('http://localhost:5173/')
      cy.get('input').type("hello")
    }),
    it("Add Button", () => {
      cy.visit('http://localhost:5173/')
      cy.get('input').type("hello")
      cy.contains('Add').click()
    }),
    it("Contain Hello", () => {
      cy.visit('http://localhost:5173/')
      cy.get('input').type("hello")
      cy.contains('Add').click()
      cy.contains("hello").should('exist')
    }),
    it("Delete Button", () => {
      cy.visit('http://localhost:5173/')
      cy.get('input').type("hello")
      cy.contains('Add').click()
      cy.contains("hello").should('exist')
      cy.contains('Delete').click()
    })



})