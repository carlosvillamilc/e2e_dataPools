import {faker} from '@faker-js/faker'

let user = '';
let password = '';
let website = faker.internet.domainWord();
let websiteWithoOut = 'https://' + faker.internet.domainWord() + 'a';
let websiteSpecialCaracteres ='https://' + '*' + faker.internet.domainWord();
let newIntegrationMore191 ='PznxxFDQUidStLeQiNWWPdpNcyWdEDgLDVBNumdqSxfyjipiBfeXmwVhUEjCEfnMhtfmRevTttJdgEWSuZGbEyKxupPQGHYcBXMEejXydKMdjByxXXgNAkTHgzFuFHWbFwWeMADhjnuMzjpXmVFRyfLTtHZkrRWeTDQvGreLGgtVCfbpnnGUCkDAyGkEEJJA';
let newIntegrationEqual191 ='jHRdhWauHxASekrGkawciVtkkUwMRLufBSRUuVFkuhezRCMEvCBGcVwqDpTPHTbpPNeepStXxpfFLgEMimWGQTzbcJUKFUSjTPXSQmhpRHAXJTLduQnhSkpTjxAEBdJgcwJNZZMuCZTLepfNepxVkWEHfyYcQgjeWqKkJmwiigVvcehxpBNUCZcgYuptqN';
let newIntegrationLess191 = faker.address.cityName();
let webHoockName = faker.address.country();
let webHoockTargetUrl = faker.internet.domainWord()




describe('Permite crear integraciones', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
        })
        cy.visit('http://localhost:3001/ghost/')
        cy.wait(2000)        
        
    })

    it('Url Sin Protocolo', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('figure[style="background-image:url(assets/img/slackicon-406aadea8994ca2ddee9c1d7157208db.png); background-size: 36px;"]').click()
        cy.get('input[name="slack[url]"]').type(website).type('{enter}') 
    })

     it('Url Sin formato', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('figure[style="background-image:url(assets/img/slackicon-406aadea8994ca2ddee9c1d7157208db.png); background-size: 36px;"]').click()
        cy.get('input[name="slack[url]"]').type(websiteWithoOut).type('{enter}') 
    })

      it('Url con caracteres especiales', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('figure[style="background-image:url(assets/img/slackicon-406aadea8994ca2ddee9c1d7157208db.png); background-size: 36px;"]').click()
        cy.get('input[name="slack[url]"]').type(websiteSpecialCaracteres).type('{enter}') 
    })

    it('Nueva Integracion mayor a 191 Caracteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('a[href="#/settings/integrations/new/"]').click()
        cy.get('input[id="new-integration-name"').eq(0).type(newIntegrationMore191).type('{enter}') 
    })

    it('Nueva Integracion igual a 191 Caracteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('a[href="#/settings/integrations/new/"]').click()
        cy.get('input[id="new-integration-name"').eq(0).type(newIntegrationEqual191).type('{enter}') 
    })

    it('Nueva Integracion menos a 191 Caracteres', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('a[href="#/settings/integrations/new/"]').click()
        cy.get('input[id="new-integration-name"').eq(0).type(newIntegrationLess191).type('{enter}') 
    })

    it('Integracion New  webHook ', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('a[href="#/settings/integrations/6289dab1ac4eb60001780d4a/"]').eq(0).click()
        cy.get('div[class="flex items-center pa2 pt1"]').eq(0).click() 
        cy.get('input[placeholder="Webhook name..."').eq(0).type(webHoockName).type('{enter}') 
        cy.get('input[placeholder="Webhook target URL..."').eq(0).type(webHoockTargetUrl).type('{enter}') 
        //cy.get('span[Create]').click() 
    })

    it('Integracion New webHook Complete', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('a[href="#/settings/integrations/6289dab1ac4eb60001780d4a/"]').eq(0).click()
        cy.get('div[class="flex items-center pa2 pt1"]').eq(0).click() 
        cy.get('input[placeholder="Webhook name..."').eq(0).type(webHoockName).type('{enter}') 
        cy.get('select[id="webhook-event"]').eq(0).select("Published page updated")
        cy.get('input[placeholder="Webhook target URL..."').eq(0).type(webHoockTargetUrl).type('{enter}') 
        
    })

    it('Integracion New webHook sin target', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('a[href="#/settings/integrations/6289dab1ac4eb60001780d4a/"]').eq(0).click()
        cy.get('div[class="flex items-center pa2 pt1"]').eq(0).click() 
        cy.get('input[placeholder="Webhook name..."').eq(0).type(webHoockName).type('{enter}') 
        cy.get('select[id="webhook-event"]').eq(0).select("Published page updated").type('{enter}')
        
    })

    it('Integracion New webHook sin nombre', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.get('a[href="#/settings/integrations/"]').eq(0).click()
        cy.get('a[href="#/settings/integrations/6289dab1ac4eb60001780d4a/"]').eq(0).click()
        cy.get('div[class="flex items-center pa2 pt1"]').eq(0).click() 
        cy.get('select[id="webhook-event"]').eq(0).select("Published page updated").type('{enter}')
        
    })


})
