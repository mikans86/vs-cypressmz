/// <reference types="Cypress" />

import { loginPOM } from "./pageObjects/loginPOM";

describe("login tests", () =>{
    before("visit vivify-scrum app ", () =>{
        cy.visit("/")
    })

    it("login with valid credentials", () =>{
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/login"
        ).as("successfullLogin");

        cy.url().should("include", "/login");
        loginPOM.loginHeading.should("exist")
        .and("have.text", "Log in with your existing account")
        loginPOM.loginButton.should("be.visible");
        loginPOM.login(Cypress.env("userEmail"), Cypress.env("userPassword"));
        cy.url().should("not.include", "/login");

        cy.wait("@successfullLogin").then(interception =>{
            expect(interception.response.statusCode).to.eq(200);
            expect(window.localStorage.token).to.exist;
        })
    })
})