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

  it('clicking a product navigates to product page', () => {
    cy.get('[data-test="product-name"]').contains('Pliers').click()
    cy.get('[data-test="add-to-cart"]').should('be.visible')
  })
  it('clicking a product navigates to product page', () => {
    cy.get('[data-test="product-name"]').contains('Bolt Cutters').click()
    cy.get('[data-test="add-to-cart"]').should('be.visible')
  })

  it('clicking a home button navigates to home page', () => {
    cy.get('[data-test="nav-home"]').click()
    cy.get('body').should('be.visible')
    
  })


})
