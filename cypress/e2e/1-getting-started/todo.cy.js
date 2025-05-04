/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/')
  })

  it('Sign-in button navigates to login screen', () => {
    cy.get('[data-test="nav-sign-in"]').click()
    cy.get('h3').should('have.text', 'Login')
  })

  it('clicking a product navigates to product page', () => {
    cy.get('[data-test="product-name"]').contains('Claw Hammer').click()
    cy.get('[data-test="add-to-cart"]').should('be.visible')
  })

  it('clicking a language button navigates to language page', () => {
    cy.get('[data-test="language-select"]').click()
    cy.get('#dropdown-animated').should('be.visible')
    cy.get('[data-test="lang-de"]').should('be.visible')

  })

  it('clicking a contact button navigates to contact page', () => {
    cy.get('[data-test="nav-contact"]').click()
    cy.get('h3').should('have.text', 'Contact')
    cy.get('[data-test="first-name"]').should('be.visible')
    cy.get('[data-test="last-name"]').should('be.visible')
    cy.get('[data-test="email"]').should('be.visible')
  })
   
})
