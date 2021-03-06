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
        cy.get('.gh-badge').click()
        cy.get('.gh-settings-portal-section > .gh-setting-last > .gh-setting-action > .gh-btn > span').click()
        cy.wait(2000)
        cy.get('[placeholder="abcdef"]').type(numberColor1).type('{enter}')
        cy.get('.response').should('to.have', 'The color should be in valid hex format') 
    })


    it('Accent color 2 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('.gh-badge').click()
        cy.get('.gh-settings-portal-section > .gh-setting-last > .gh-setting-action > .gh-btn > span').click()
        cy.wait(2000)
        cy.get('[placeholder="abcdef"]').type(numberColor2).type('{enter}')
        cy.get('.response').should('to.have', 'The color should be in valid hex format') 
    })

    it('Accent color 3 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('.gh-badge').click()
        cy.get('.gh-settings-portal-section > .gh-setting-last > .gh-setting-action > .gh-btn > span').click()
        cy.wait(2000)
        cy.get('[placeholder="abcdef"]').type(numberColor3).type('{enter}')
        cy.get('.response').should('to.have', 'The color should be in valid hex format') 
    })

    it('Accent color 4 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('.gh-badge').click()
        cy.get('.gh-settings-portal-section > .gh-setting-last > .gh-setting-action > .gh-btn > span').click()
        cy.wait(2000)
        cy.get('[placeholder="abcdef"]').type(numberColor4).type('{enter}')
        cy.get('.response').should('to.have', 'The color should be in valid hex format') 
    })

    it('Accent color 5 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('.gh-badge').click()
        cy.get('.gh-settings-portal-section > .gh-setting-last > .gh-setting-action > .gh-btn > span').click()
        cy.wait(2000)
        cy.get('[placeholder="abcdef"]').type(numberColor5).type('{enter}')
        cy.get('.response').should('to.have', 'The color should be in valid hex format') 
    })

    it('Accent color6 numbers', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
       cy.get('.gh-badge').click()
        cy.get('.gh-settings-portal-section > .gh-setting-last > .gh-setting-action > .gh-btn > span').click()
        cy.wait(2000)
        cy.get('[placeholder="abcdef"]').type(numberColor6).type('{enter}')
        cy.get('.response').should('to.have', 'The color should be in valid hex format') 
    })

    it('Accent color Special caracters', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/labs/"]').eq(0).click()
        cy.get('.gh-badge').click()
        cy.get('.gh-settings-portal-section > .gh-setting-last > .gh-setting-action > .gh-btn > span').click()
        cy.wait(2000)
        cy.get('[placeholder="abcdef"]').type(numberColorSpecialCaracteres).type('{enter}')
        cy.get('.response').should('to.have', 'The color should be in valid hex format') 
    })

 

})
