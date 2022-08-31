/// <reference types = "Cypress"/>

describe('Inpect Automation Test store using chain of commands', () => {
  it('Click on first item using item header', () => {
    cy.visit('https://automationteststore.com/')
    cy.get(
      '#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname',
    ).click()
  })

  it('Click on first item using item text', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
  })

  it('Click on first item using index', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.fixed_wrapper').find('.productname').eq(0).click()
  })
})
