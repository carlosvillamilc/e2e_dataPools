import {faker} from '@faker-js/faker'
require("cypress-xpath");

let user = '';
let password = '';
let port = '3001';
let tagName = '';
describe('new tags', () => {
    beforeEach(() => {
      
      cy.fixture('ghost.json').as('ghost')
      cy.fixture('ghost.json').then((data)  => {
          user = data.user
          password = data.password            
      })
      cy.visit(`http://localhost:${port}/ghost/`)
      cy.wait(2000)
      tagName = faker.lorem.sentence(100)
      
    })
    it('Post title < 2000', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
        cy.get('a[href="#/posts/"]').eq(0).click()
        cy.get('a[href="#/editor/post/"]').eq(0).click()

        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]'
        ).type(faker.datatype.string(1999))

    })

    it('Post title < 2000', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
        cy.get('a[href="#/posts/"]').eq(0).click()
        cy.get('a[href="#/editor/post/"]').eq(0).click()

        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]'
        ).type(faker.datatype.string(2000))

    })

    it('Post title < 2000', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
        cy.get('a[href="#/posts/"]').eq(0).click()
        cy.get('a[href="#/editor/post/"]').eq(0).click()

        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]'
        ).type(faker.datatype.string(2200))

    })


    it('Post title caracteres especiales', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
        cy.get('a[href="#/posts/"]').eq(0).click()
        cy.get('a[href="#/editor/post/"]').eq(0).click()

        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]'
        ).type('$%$#&%$%&//&(/)#%&#%')

    })
})