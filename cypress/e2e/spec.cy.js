describe('Todo app flows', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads the todo app', () => {
    cy.get('input').should('be.visible')
    cy.contains('Add').should('be.visible')
  })

  it('allows typing in the input box', () => {
    cy.get('input').type('hello').should('have.value', 'hello')
  })

  it('adds a new todo item when Add is clicked', () => {
    const todoText = 'hello-e2e'

    cy.get('input').type(todoText)
    cy.contains('Add').click()

    cy.contains('li', todoText).should('exist')
  })

  it('shows newly added todo in the list', () => {
    const todoText = 'hello-e2e-visible'

    cy.get('input').type(todoText)
    cy.contains('Add').click()

    cy.contains('li', todoText).should('exist')
  })

  it('deletes the newly added todo item', () => {
    const todoText = 'hello-e2e-delete'

    cy.get('input').type(todoText)
    cy.contains('Add').click()
    cy.contains('li', todoText).should('exist')

    cy.contains('li', todoText).within(() => {
      cy.contains('Delete').click()
    })

    cy.contains('li', todoText).should('not.exist')
  })
})