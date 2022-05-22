import {faker} from '@faker-js/faker'

let port = '3001';
let user = '';
let password = '';
let website = faker.internet.domainWord();
let websiteSpecialCharacter = '+' + faker.internet.domainWord();
let websiteWithoutDomain = '*' + faker.internet.domainSuffix();




describe('Permite configurar la pagina en el perfil personal', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
        })
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(2000)        
        
    })

    it('configura erronamente un website', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('span[class="gh-user-email"]').eq(0).click()
       //duda
        cy.get('a[href="#/staff/andres/"]').click()
        cy.get('#user-website').type(website)
        cy.get('#user-facebook').click()
        cy.get('p[class="response"]').should(($p)=>{
            expect($p).to.contain("Website is not a valid url")
          })
    
    })

    it('configura un website con dominio pero con caracteres epeciales', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('span[class="gh-user-email"]').eq(0).click()
       //duda
        cy.get('a[href="#/staff/andres/"]').click()
        cy.get('#user-website').type(websiteSpecialCharacter)
        cy.get('#user-facebook').click()
        cy.get('p[class="response"]').should(($p)=>{
            expect($p).to.contain("Website is not a valid url")
          })
    
    })

     it('configura erronamente un website sin dominio y caracteres especiales', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('span[class="gh-user-email"]').eq(0).click()
       //duda
        cy.get('a[href="#/staff/andres/"]').click()
        cy.get('#user-website').type(websiteWithoutDomain)
        cy.get('#user-facebook').click()
        cy.get('p[class="response"]').should(($p)=>{
            expect($p).to.contain("Website is not a valid url")
          })
    
    })

   

 

})
