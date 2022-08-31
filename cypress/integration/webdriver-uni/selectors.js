/// <reference types = "Cypress"/>

describe('Selectors Examples', () => {
  it('Examples', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    // BY tag name
    cy.get('input')

    //by Attribute name and value
    cy.get("input[name='first_name']")

    //by id
    cy.get('#contact_me')

    //by class
    cy.get('.feedback-input')

    //by multiple classes
    cy.get('[class="navbar navbar-inverse navbar-fixed-top"]')

    //by two different attributes
    cy.get("[name='email'][placeholder='Email Address']")

    // by xpath
    cy.xpath("//input[@name ='first_name']")
  })
})
