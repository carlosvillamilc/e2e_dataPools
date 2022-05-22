// type definitions for Cypress object "cy"
// <reference types="cypress" />
let port = '2369';
const availablefixtures = [
    {
        "name": "datosApriori",
        "context": "Perfil de usuario - Name vacio, correo correcto"
    },
    {
        "name": "datosApriori12",
        "context": "Perfil de usuario - Name diligenciado, correo vacio"
    },
    {
        "name": "datosApriori13",
        "context": "Perfil de usuario - Name diligenciado, correo sin @"
    },
    {
        "name": "datosApriori14",
        "context": "Perfil de usuario - Name diligenciado, correo sin dominio"
    },
    {
        "name": "datosApriori15",
        "context": "Perfil de usuario - Name diligenciado, correo con doble @"
    },
    {
        "name": "datosApriori16",
        "context": "Perfil de usuario - Name diligenciado, correo con @ y dominio sin texto"
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
      cy.visit(`http://localhost:${port}/ghost/`)
      cy.wait(2000)
      var usuario = this.data.user;
      var password = this.data.password;
      cy.get('#ember8').type(usuario)
      cy.get('#ember10').type(password)
      cy.get('#ember12').click()  
      cy.wait(2000)
      cy.get('.gh-user-email').click()
      cy.wait(2000)
      cy.get('a[href*="#/staff/vladimir/"]').click()
      cy.wait(2000)
      cy.get('#user-name').clear()
      cy.get('#user-name').type(this.data.name,{force: true})
      cy.wait(2000)
      cy.get('#user-email').clear();
      cy.wait(2000)
      cy.get('[placeholder="Email Address"]').type(this.data.user2,{force: true})
      cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
      cy.get('.response').should(($p)=>{
        expect($p).to.contain(this.data.mensaje)
      })
            })
      })
    }) 
  })
  