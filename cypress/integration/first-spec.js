/// <reference types="cypress" />
beforeEach(() => {
  indexedDB.deleteDatabase('kv-storage:default')
})

it('shows counter', () => {
  cy.visit('/')
  cy.get('#counter').should('be.visible')
})

it('increments the counter on click', () => {
  cy.visit('/')
  cy.get('#counter').should('have.text', '0')
  cy.get('#inc').click()
  cy.get('#counter').should('have.text', '1')
  cy.reload()
  cy.get('#counter').should('have.text', '1')
})
