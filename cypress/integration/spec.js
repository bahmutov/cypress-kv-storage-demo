/// <reference types="cypress" />
// we cannot import from "std:kv-storage" directly
// Cypress bundler chokes on this
// import { storage } from 'std:kv-storage'

it('loads KV storage', () => {
  let storage

  // thus we need to grab the storage when the browser imports it
  Object.defineProperty(Cypress, 'storage', {
    set (value) {
      storage = value
      // insert the value we need for tests
      storage.set('foo', 'bar')
    }
  })
  cy.visit('index.html', {
    onBeforeLoad (win) {
      cy.spy(win.console, 'log').as('console-log')
    }
  })

  cy.get('@console-log').should('be.calledWith', 'got foo', 'bar')
})
