// type definitions for Cypress object "cy"
// <reference types="cypress" />
let port = '2369';

const availablefixtures = [
    {
        "name": "datosApriori2",
        "context": "Usuario y password invalidos"
    },
    {
      "name": "datosApriori3",
      "context": "Usuario valido y Contraseña invalida"
    },
    {
      "name": "datosApriori4",
      "context": "Usuario invalido y Contraseña valida"
    },
    {
      "name": "datosApriori5",
      "context": "Usuario vacio y Contraseña vacia"
    },
    {
      "name": "datosApriori6",
      "context": "Usuario vacio y Contraseña correcta"
    },
    {
      "name": "datosApriori7",
      "context": "Usuario correcto y Contraseña vacia"
    },
    {
      "name": "datosApriori8",
      "context": "Usuario sin arroba y Contraseña valida"
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
      cy.get('#ember8').type(this.data.user)
      cy.get('#ember10').type(this.data.password)
      cy.get('#ember12').click() 
      cy.wait(2000)  
      cy.get('.main-error').should(($p)=>{
        expect($p).to.contain(this.data.mensaje)
      })
      
            })
        })
    })
  })
  