import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('Pagina Login SOC', function() {
    cy.visit("https://liderbcicolaboradores-qa.retailcard.cl/")
    cy.wait(2000)
})

When('Ingreso username', function() {
    cy.get('[form=""] > .form-control').should("be.visible").type("pmoralesi.ext")
    cy.wait(500)    
})

And('Ingreso password', function() {
    cy.get('.pos-r > .form-control').should("be.visible").type("Adidas.2024")
    cy.wait(500)      
})

And('Presiono boton ingresar', function() {
    cy.get('.card-footer > .btn').should("be.visible").click()
    cy.wait(500)      
})

Then('Ingreso Rut Cliente a Consultar', function() {
    cy.get('#namanyay-search-box').should("be.visible").type("130495451")
})

And('Presiono boton consultar', function() {
    cy.get('#namanyay-search-btn').should("be.visible").click()
})
