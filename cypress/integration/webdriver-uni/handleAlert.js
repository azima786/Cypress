/// <reference types = "Cypress" />

describe('Handle JS alerts', () => {
  it('Confirm JS alert contains the correct text', () => {
    // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true }) // to open in same browser tab
    //cy.get('#contact-us').click({ force: true })

    cy.get('#button1').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!')
    })
  })
})
