// type definitions for Cypress object "cy"
// <reference types="cypress" />

const availablefixtures = [
    {
        "name": "datosApriori",
        "context": "Usuario y Contraseña validos"
    }
  ]
  
  describe('Automation Test Suite - Fixtures', function () {
  
    //loop through both the fixtues 
    availablefixtures.forEach((afixture) => {
    describe(afixture.context, () => {
  
    //Use the cy.fixture() method to pull data from fixture file
    before(function () {
      cy.fixture(afixture.name).then(function (data) {
        this.data = data;
      })
    })
  
    it('Cypress Test Case - Understanding Fixtures', function () {
  
      //Provide the data read from the fixture
      cy.visit('http://localhost:2369/ghost/')
      cy.wait(2000)
      var usuario = this.data.user;
      var password = this.data.password;
      cy.get('#ember8').type(usuario)
      cy.get('#ember10').type(password)
      cy.get('#ember12').click()    
      cy.url().should('eq', 'http://localhost:2369/ghost/#/site')
            })
        })
    })
  })
  