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
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(2000)        
        
    })

    it('Subscribe sin correo', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/site/"]').click()
        cy.wait(500) 
        cy.contains('#subscribe').click()
       // cy.get(`a[href="#subscribe"]`).eq(0).click();
       cy.contains('subscribe-button')
        cy.wait(500);
        //cy.get('input[placeholder="youremail@example.com"]').type(SubscribeEmail).type('{enter}') 
        //cy.get('button[class="button primary"]').click()
        
    })

 

})
