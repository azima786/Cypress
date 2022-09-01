/// <reference types = "Cypress"/>

describe('Alias and invoke', () => {
  it('Validate specific haircut product', () => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    cy.get('.fixed .prdocutname').eq(0).invoke('text').as('productThumbnail') //extracts product
    cy.get('@productThumbnail').its('length').should('be.gt', 5) //greater than 5 length
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
  })

  it.only('Validate product thumbnail', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('productThumbnail')
    cy.get('@productThumbnail').should('have.length', 16)
    cy.get('@productThumbnail')
      .find('.productcart')
      .invoke('attr', 'title')
      .should('include', 'Add to Cart')
  })
})
