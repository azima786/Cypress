/// <reference types = "Cypress" />

describe('Test Contact US Form via WebDriverUni', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#contact-us > .thumbnail > .section-title > h1').click()
  })
  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {})
})
