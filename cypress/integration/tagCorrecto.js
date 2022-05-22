let port = '2369';

const availablefixtures = [
    {
        "name": "datosApriori26",
        "context": "Tags sin colocar Name y con descripción"
    },
    {
      "name": "datosApriori24",
      "context": "Tag con Name y con descripción = 500 caracteres"
  },
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
      cy.wait(2000)
      cy.get('a[href="#/tags/"]').eq(0).click()
      cy.wait(100)
      cy.contains('New tag').click()            
      cy.get('#tag-name').type(this.data.tagName)
      cy.get('[name=description]').type(this.data.descripcion)
      cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
      cy.get('.gh-canvas-title').should(($h2)=>{
        expect($h2).to.contain(this.data.tagName)
      })
            })
      })
    }) 
  })
  