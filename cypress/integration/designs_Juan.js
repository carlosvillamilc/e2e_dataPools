import {faker} from '@faker-js/faker'
require("cypress-xpath");

let port = '2368';
let user = '';
let password = '';



describe('Design Cases', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
        })
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(2000)        
        
    })
    it('Create a navigation label with empty input', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/design/"]').eq(0).click()
        cy.get('input[placeholder="Label"]').type('')
        cy.get('button[class="gh-blognav-add"]').click()
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()

        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })



it('Create a navigation label with numbers in  input', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/design/"]').eq(0).click()
        cy.get('input[placeholder="Label"]').type(faker.datatype.number({ max: 99 }))
        cy.get('button[class="gh-blognav-add"]').click()
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()

        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })


it('Create a navigation label with empty URL', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/design/"]').eq(0).click()
        cy.get('input[placeholder="Label"]').type(faker.datatype.number({ max: 99 }))
        cy.get('button[class="gh-blognav-add"]').click()
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()

        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })
})