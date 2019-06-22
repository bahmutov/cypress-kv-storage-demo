before(() => {
  expect(Cypress.browser)
    .to.have.property('family')
    .equal('chrome')
  expect(Cypress.browser)
    .to.have.property('name')
    .equal('chrome', 'this demo only runs in regular Chrome v74+')
})
