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
        cy.wait(2000) 
       // cy.get('svg[xmlns="http://www.w3.org/2000/svg"]').click()
        //cy.get('input[placeholder="youremail@example.com"]').type(SubscribeEmail).type('{enter}') 
        //cy.get('button[class="button primary"]').click()
        
    })

 

})
