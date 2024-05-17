import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'

Given('I open Google page', function() {
    cy.visit(url)
})

Then('I see "Google" in the title', function() {
    cy.log('solo para testeo')
})