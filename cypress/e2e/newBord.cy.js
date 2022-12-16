/// <reference types="Cypress" />
import {addBordPOM } from "../e2e/pageObjects/addBoardPom"
import { loginPOM } from "./pageObjects/loginPOM";
import { faker } from '@faker-js/faker'

describe ("add board test",() => {
    before("login with valid credentials", () => {
        cy.visit("/")
        cy.url().should("include", "/login");
        loginPOM.loginHeading.should("exist")
        .and("have.text", "Log in with your existing account")
        loginPOM.loginButton.should("be.visible");
        loginPOM.login(Cypress.env("userEmail"), Cypress.env("userPassword"));
        cy.url().should("not.include", "/login");
    })

let createBordData = {
      bordName:faker.lorem.word()  
   }
   it("create organization", () =>{
    cy.url().should("include", "my-organizations");
    addBordPOM.addBord(createBordData.bordName)
  
   })


  
})