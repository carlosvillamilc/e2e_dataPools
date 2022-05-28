import {faker} from '@faker-js/faker'

let port = '3001';
let user = '';
let password = '';
let numberColor1 = faker.datatype.number({ min: 1, max: 1});
let numberColor2 = faker.datatype.number({ min: 1, max: 2});
let numberColor3 = faker.datatype.number({ min: 1, max: 3});
let numberColor4 = faker.datatype.number({ min: 1, max: 4});
let numberColor5 = faker.datatype.number({ min: 1, max: 5});
let numberColor6 = faker.datatype.number({ min: 1, max: 6});
let numberColorSpecialCaracteres = 'S';
let port = '3001';



describe('Permite SetUp el portal de members', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
        })
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(2000)        
        
    })

    it('Accent color 1 number', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('a[href="#/settings/labs/members/"]').eq(0).click()
        cy.get('button[class="gh-btn gh-btn-outline blue"]').eq(0).click()
        cy.get('input[id="ember113"').eq(1).type(numberColor1)
        cy.get('button[class="gh-btn gh-btn-icon gh-btn-blue ember-view"]').click()  
    })
/*
cy.get('[data-test-id="test-example"]').should('have.length', 5)
    it('Accent color 2 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('a[href="#/settings/labs/members/"]').eq(0).click()
        cy.get('button[class="gh-btn gh-btn-outline blue"]').eq(0).click()
       cy.get('#ember122').type(numberColor2)
        cy.get('button[class="gh-btn gh-btn-icon gh-btn-blue ember-view"]').click()  
    })

    it('Accent color 3 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('a[href="#/settings/labs/members/"]').eq(0).click()
        cy.get('button[class="gh-btn gh-btn-outline blue"]').eq(0).click()
        cy.get('#ember122').type(numberColor3)
        cy.get('button[class="gh-btn gh-btn-icon gh-btn-blue ember-view"]').click()  
    })

    it('Accent color 4 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('a[href="#/settings/labs/members/"]').eq(0).click()
        cy.get('button[class="gh-btn gh-btn-outline blue"]').eq(0).click()
       cy.get('#ember122').type(numberColor4)
        cy.get('button[class="gh-btn gh-btn-icon gh-btn-blue ember-view"]').click()  
    })

    it('Accent color 5 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('a[href="#/settings/labs/members/"]').eq(0).click()
        cy.get('button[class="gh-btn gh-btn-outline blue"]').eq(0).click()
       cy.get('#ember122').type(numberColor5)
        cy.get('button[class="gh-btn gh-btn-icon gh-btn-blue ember-view"]').click()  
    })

    it('Accent color6 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('a[href="#/settings/labs/members/"]').eq(0).click()
        cy.get('button[class="gh-btn gh-btn-outline blue"]').eq(0).click()
       cy.get('#ember122').type(numberColor6)
        cy.get('button[class="gh-btn gh-btn-icon gh-btn-blue ember-view"]').click()  
    })

    it('Accent color Special caracters', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('a[href="#/settings/labs/members/"]').eq(0).click()
        cy.get('button[class="gh-btn gh-btn-outline blue"]').eq(0).click()
        cy.get('#ember122').type(numberColorSpecialCaracteres)
        cy.get('button[class="gh-btn gh-btn-icon gh-btn-blue ember-view"]').click()  
    })
*/
 

})
