import {faker} from '@faker-js/faker'
require("cypress-xpath");

let port = '2368';
let user = '';
let password = '';

let noteless300 = faker.name.findName();
let noteEqual300 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.';
let notemore300 = faker.lorem.paragraphs(4);

let noteless500 = faker.name.findName();
let noteEqual500 = 'wyMqzNwdMQcyiMTkSbSBEGvrNPiiADTtnHZBMjPFiELqgxejzNkahaNzfvVxFRkzveBkUNXnWajFfrqfurpCJBjwYJybHyZGjvfmkTxaKRtpQFmCCTaLnqUCPxadDApzpGDZzLDmxdeYrSKhZNUEnytAZeSVAbiVhUKvdqeepdcTqbHHzwGKSaNSSGiFdpZadWeMASdaJdtVLWKTwiGrKLZpSGmZyNTqBYuvKbWkaGZEvGgUMSZKXdEndQKbuehgBuhkGNrgZbNeiMuPbppnwZYCxWPPTbJrXYngFRFVMngikemHccdzgAxmTpmiwqtJTNnDGMEArLLCdwfGJznkjzBQmAewRtUADMMNAKpjMFXhPYVpjjNXymxetKKaggHabFHbtrEKgpiYcfpnqaxEBJUdmrNxLHjnPdUqaJfuDPWmSSYJmDxiJcuuTjJyDNxnWMgXkQSWrjNcAxxzeGtxWaDpVJMEuefHGCNfzhBqXxYGvjbLkTzE';
let notemore500 = faker.lorem.paragraphs(4);


describe('Twitter Title Cases', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
        })
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(2000)        
        
    })
    it('Twitter Title with less than 300 characteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/general/"]').eq(0).click()
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[1]/div[2]/button[1]/span[1]'
        ).click();
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]'
        ).type(noteless300);
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 

        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })
  
    it('Twitter Title with equal 300 characteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/general/"]').eq(0).click()
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[1]/div[2]/button[1]/span[1]'
        ).click();
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]'
        ).type(noteEqual300);
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 

        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })

    it('Twitter title with more than 500 characteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/general/"]').eq(0).click()
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[1]/div[2]/button[1]/span[1]'
        ).click();
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]'
        ).type(notemore300);
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 
        
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })
    

})


describe('Twitter Description Cases', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
        })
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(2000)        
        
    })
    it('Twitter description with less than 300 characteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/general/"]').eq(0).click()
        //Expande Twitter
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[1]/div[2]/button[1]/span[1]'
        ).click();
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/textarea[1]'
        ).type(noteless500);
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 
        
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })
  
    it('Twitter description with equal 300 characteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/general/"]').eq(0).click()
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[1]/div[2]/button[1]/span[1]'
        ).click();
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/textarea[1]'
        ).type(noteEqual500);
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 
        
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })

    it('Title description with more than 500 characteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/general/"]').eq(0).click()
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[1]/div[2]/button[1]/span[1]'
        ).click();
        cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/section[1]/div[6]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/textarea[1]'
        ).type(notemore500);
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click() 
    
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })
    

})
