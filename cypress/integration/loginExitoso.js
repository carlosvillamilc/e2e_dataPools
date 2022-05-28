// type definitions for Cypress object "cy"
// <reference types="cypress" />
let port = '3001';
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
      cy.fixture('ghost.json').then((data2)  => {
        this.data2 = data2;
    })
    })
  
    it('Cypress Test Case - Understanding Fixtures', function () {
  
      //Provide the data read from the fixture
      cy.visit(`http://localhost:${port}/ghost/`)
      cy.wait(2000)
      var usuario = this.data2.user;
      var password = this.data2.password;
      cy.get('#ember8').type(usuario)
      cy.get('#ember10').type(password)
      cy.get('#ember12').click()    
      cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            })
        })
    })
  })
  