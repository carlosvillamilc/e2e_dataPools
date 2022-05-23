import {faker} from '@faker-js/faker'

let port = '3001';
let user = '';
let password = '';
let SubscribeEmail = "";






describe('Suscribirse como Ingeneiro en viewSite', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
        })
        cy.visit(`http://localhost:${port}/`)
        cy.wait(2000)        
        
    })

    it('Subscribe sin correo', () => {
        cy.url().should('eq', `http://localhost:${port}/`)
        cy.get(`a[href="#subscribe"]`).eq(0).click();
        cy.wait(500);
        cy.get('.subscribe-email').type(" ");
        cy.wait(500);
        cy.get('#subscribe > div > div > form > div.form-group > button').click();
        cy.get('div.message-error').should('contain', 'Please enter a valid email address!')
        
    })

    it('Subscribe correo sin arroba', () => {
        cy.url().should('eq', `http://localhost:${port}/`)
        cy.get(`a[href="#subscribe"]`).eq(0).click();
        cy.wait(500);        
        cy.get('.subscribe-email').type(faker.random.word());
        //cy.get('.subscribe-email').type(faker.internet.email('Jeanne', 'Doe', 'example.fakerjs.dev', { allowSpecialCharacters: true }));
        cy.wait(500);
        cy.get('#subscribe > div > div > form > div.form-group > button').click();
        cy.get('div.message-error').should('contain', 'Please enter a valid email address!')
        
    })

    it('Subscribe correo sin dominio', () => {
        cy.url().should('eq', `http://localhost:${port}/`)
        cy.get(`a[href="#subscribe"]`).eq(0).click();
        cy.wait(500);        
        cy.get('.subscribe-email').type(faker.random.word()+'@');
        //cy.get('.subscribe-email').type(faker.internet.email('Jeanne', 'Doe', 'example.fakerjs.dev', { allowSpecialCharacters: true }));
        cy.wait(500);
        cy.get('#subscribe > div > div > form > div.form-group > button').click();
        cy.get('div.message-error').should('contain', 'Please enter a valid email address!')
        
    })

    it('Subscribe correo con 3 dominios', () => {
        cy.url().should('eq', `http://localhost:${port}/`)
        cy.get(`a[href="#subscribe"]`).eq(0).click();
        cy.wait(500);        
        cy.get('.subscribe-email').type(faker.random.word()+'@gmail.co.co.co');        
        cy.wait(500);
        cy.get('#subscribe > div > div > form > div.form-group > button').click();
        cy.get('div.message-error').should('contain', 'Please enter a valid email address!')
        
    })
})
