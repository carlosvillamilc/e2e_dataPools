import {faker} from '@faker-js/faker'

let user = '';
let password = '';
let email = faker.internet.email();
let noteless500 = faker.name.findName();
let noteEqual500 = 'wyMqzNwdMQcyiMTkSbSBEGvrNPiiADTtnHZBMjPFiELqgxejzNkahaNzfvVxFRkzveBkUNXnWajFfrqfurpCJBjwYJybHyZGjvfmkTxaKRtpQFmCCTaLnqUCPxadDApzpGDZzLDmxdeYrSKhZNUEnytAZeSVAbiVhUKvdqeepdcTqbHHzwGKSaNSSGiFdpZadWeMASdaJdtVLWKTwiGrKLZpSGmZyNTqBYuvKbWkaGZEvGgUMSZKXdEndQKbuehgBuhkGNrgZbNeiMuPbppnwZYCxWPPTbJrXYngFRFVMngikemHccdzgAxmTpmiwqtJTNnDGMEArLLCdwfGJznkjzBQmAewRtUADMMNAKpjMFXhPYVpjjNXymxetKKaggHabFHbtrEKgpiYcfpnqaxEBJUdmrNxLHjnPdUqaJfuDPWmSSYJmDxiJcuuTjJyDNxnWMgXkQSWrjNcAxxzeGtxWaDpVJMEuefHGCNfzhBqXxYGvjbLkTzE';
let notemore500 = faker.lorem.paragraphs(4);
let port = '3001';


describe('Permite crear un member con notas', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
        })
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(2000)        
        
    })
    it('Note member with less than 500 characteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/members/"]').eq(0).click()
        cy.get('a[href="#/members/new/"]').eq(0).click()
        cy.get('#member-email').type(email)
        cy.get('#member-note').type(noteless500)
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()   
    })
  
    it('Note member with equal 500 characteres', () => {       
         cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/members/"]').eq(0).click()
        cy.get('a[href="#/members/new/"]').eq(0).click()
        cy.get('#member-email').type(email)
        cy.get('#member-note').type(noteEqual500)
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 
    })

    it('Note member with more than 500 characteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/members/"]').eq(0).click()
        cy.get('a[href="#/members/new/"]').eq(0).click()
        cy.get('#member-email').type(email)
        cy.get('#member-note').type(notemore500)
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 
    })
    

})
