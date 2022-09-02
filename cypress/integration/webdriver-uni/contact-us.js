/// <reference types = "Cypress" />

describe('Test Contact US Form via WebDriverUni', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }) // to open in same browser tab
    //cy.get('#contact-us').click({ force: true })
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.url().should('include', 'contactus')
    cy.get('[name="first_name"]').type('AZIMA')
    cy.get('[name="last_name"]').type('KESH')
    cy.get('[name="email"]').type('KESH@gmail.com')
    cy.get('[name="message"]').type('hello')
    cy.get('[type="submit"]').click()
    cy.get('h1').should('have.text', 'Thank You for your Message!')
    cy.get('h1').should('not.have.text', '2Thank You for your Message!')
  })
  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit('https://webdriveruniversity.com')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    cy.get('[name="first_name"]').type('AZIMA')
    cy.get('[name="last_name"]').type('KESH')
    cy.get('[name="message"]').type('hello')
    cy.get('[type="submit"]').click()
    cy.get('body').contains('Error: all fields are required')
  })
})
