/// <reference types = "Cypress" />

describe('Test Contact US Form via automation test store', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('a[href$="contact"]').click()
    cy.get('#ContactUsFrm_first_name').type('AZIMA')
    cy.get('#ContactUsFrm_email').type('azima@gmail.com')
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
    cy.get('#ContactUsFrm_enquiry').type('Learning cypress')
    cy.get('button[title="Submit"]').click()
    cy.get('.mb40 > :nth-child(3)').should(
      'have.text',
      'Your enquiry has been successfully sent to the store owner!',
    )
  })
})
