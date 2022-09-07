/// <reference types = "Cypress" />

describe('Cypress web security', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit('http://www.webdriveruniversity.com/')
    cy.visit('https://automationtesting.in/')
  })

  it('Validate visiting two different domains via user actions', () => {
    // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#automation-test-store').invoke('removeAttr')
  })
})
