import {faker} from '@faker-js/faker'
require("cypress-xpath");

let user = '';
let password = '';
let port = '2368';
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
it('Perfil Bio < 200', () => { 
    cy.get('#ember8').type(user)
    cy.get('#ember10').type(password)
    cy.get('#ember12').click()        
    cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
    cy.wait(1000)  
    cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)           
       
    cy.xpath(
    '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/form[1]/div[1]/fieldset[1]/div[8]/textarea[1]'
    ).type(faker.datatype.number(199))
        
    cy.wait(500)
    cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
    cy.wait(100)  
    cy.get('div.gh-nav-bottom').click()
    cy.wait(100)
    cy.get('a[href="#/signout/"]').click()
})


it('Perfil Bio = 200', () => { 
    cy.get('#ember8').type(user)
    cy.get('#ember10').type(password)
    cy.get('#ember12').click()        
    cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
    cy.wait(1000)  
    cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
    cy.wait(500)
   
    cy.xpath(
    '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/form[1]/div[1]/fieldset[1]/div[8]/textarea[1]'
    ).type(faker.datatype.number(200))
    cy.wait(500)
    
    cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
    cy.wait(500)
    cy.get('div.gh-nav-bottom').click()
    cy.wait(100)
    cy.get('a[href="#/signout/"]').click()
    })


it('Perfil Bio > 200', () => { 
    cy.get('#ember8').type(user)
    cy.get('#ember10').type(password)
    cy.get('#ember12').click()        
    cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
    cy.wait(1000)  
    cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();

    cy.wait(500)
   
    cy.xpath(
    '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/form[1]/div[1]/fieldset[1]/div[8]/textarea[1]'
    ).type(faker.datatype.number(300))
    cy.wait(500)

    cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
    cy.wait(500)
    cy.get('div.gh-nav-bottom').click()
    cy.wait(100)
    cy.get('a[href="#/signout/"]').click()
    })

    

})