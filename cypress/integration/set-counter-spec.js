/// <reference types="cypress" />
beforeEach(() => {
  indexedDB.deleteDatabase('kv-storage:default')
})

// DOES NOT WORK
// we cannot import from "std:kv-storage" directly
// Cypress bundler chokes on this
// import { storage } from 'std:kv-storage'

it.only('saves the count in storage', () => {
  cy.visit('/').then(() => {
    // confirm our application has passed us "Cypress.storage" reference
    expect(Cypress).to.have.property('storage')
  })
  cy.get('#counter').should('have.text', '0')
  cy.get('#inc')
    .click()
    // the promise returned by async storage.get
    // is automatically part of Cypress chain
    .then(() => Cypress.storage.get('count'))
    // and the resolved value can be asserted against
    .should('equal', 1)

  cy.get('#inc')
    .click()
    .then(() => Cypress.storage.get('count'))
    .should('equal', 2)
})

it('starts with 100', () => {
  cy.visit('/')
  // TODO use "storage" methods to set "count"
  cy.get('#counter').should('have.text', '100')
})

// it.skip('loads KV storage', () => {
//   let storage

//   // thus we need to grab the storage when the browser imports it
//   Object.defineProperty(Cypress, 'storage', {
//     set (value) {
//       storage = value
//       // insert the value we need for tests
//       storage.set('foo', 'bar')
//     }
//   })
//   cy.visit('index.html', {
//     onBeforeLoad (win) {
//       cy.spy(win.console, 'log').as('console-log')
//     }
//   })

//   cy.get('@console-log').should('be.calledWith', 'got foo', 'bar')
// })
