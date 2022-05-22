import {faker} from '@faker-js/faker'

let port = '3001';
let user = '';
let password = '';
let emailDomains = faker.internet.email() +'.co.AE';
let emailCaracteres = 'ae+'+ faker.internet.email();
let emailblanks = 'aec '+ faker.internet.email();
let emailMore190 = 'TUerAZdThtcKYGmzcbRuESGLLTjLZYQxahknbbSQwwKnTftcfgJcMMDeCpfwfeYAxTyCiNGkxLGyPDtkUWrNjABTWNQgQHnmiLqQJTRyKuzHVmHNtfKqGVdRwkbNTVpajWmNmwmGWPgAaCCjBhnmEzFbMCreAypYfNfnDYzKVAwNGzPzq@hotmail.com.co';
let emailEqual190 = faker.internet.email();



describe('Permite crear un member con mas de dos dominios', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
        })
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(2000)        
        
    })
    it('Email member with more than 2 domains', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/members/"]').eq(0).click()
        cy.get('a[href="#/members/new/"]').eq(0).click()
        cy.get('#member-email').type(emailDomains)
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()  
    })

    it('Email member with special caracters', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/members/"]').eq(0).click()
        cy.get('a[href="#/members/new/"]').eq(0).click()
        cy.get('#member-email').type(emailCaracteres)
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()  
    })

    it('Email member with blanks', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/members/"]').eq(0).click()
        cy.get('a[href="#/members/new/"]').eq(0).click()
        cy.get('#member-email').type(emailblanks)
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 
    })

    it('Email member more than 190', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/members/"]').eq(0).click()
        cy.get('a[href="#/members/new/"]').eq(0).click()
        cy.get('#member-email').type(emailMore190)
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 
    })

    it('Email member equal than 190', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/members/"]').eq(0).click()
        cy.get('a[href="#/members/new/"]').eq(0).click()
        cy.get('#member-email').type(emailEqual190)
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 
    })

})
