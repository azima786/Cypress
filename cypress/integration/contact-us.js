/// <reference types = "Cypress" />

describe('Test Contact US Form via WebDriverUni', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //cy.get('#contact-us').click({ force: true })
    cy.get('[name="first_name"]').type('AZIMA')
    cy.get('[name="last_name"]').type('KESH')
    cy.get('[name="email"]').type('KESH@gmail.com')
    cy.get('[name="message"]').type('hello')
    cy.get('[type="submit"]').click()
  })
  it.only('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('AZIMA')
    cy.get('[name="last_name"]').type('KESH')
    cy.get('[name="message"]').type('hello')
    cy.get('[type="submit"]').click()
  })
})
