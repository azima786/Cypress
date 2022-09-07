/// <reference types = "Cypress" />

describe('Validate webdriveruni homepage links', () => {
  it('Confirm links redirect to correct pages', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }) // remains in same tab
    cy.url().should('include', 'contactus')
    cy.go('back')
    cy.reload() //reload page
    cy.url().should('include', 'https://webdriveruniversity.com/')
    cy.reload() //reload without using cache
    cy.go('forward')
    cy.url().should('include', 'contactus')
    cy.go('back')
    cy.get('#login-portal')
      .invoke('removeAttr', 'target')
      .click({ force: true }) // remains in same tab

    cy.url().should('include', 'Login-Portal')
    cy.go('back')

    cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true }) // remains in same tab

    cy.url().should('include', 'To-Do-List')
    cy.go('back')
  })
})
