import {faker} from '@faker-js/faker'

let user = '';
let password = '';
let port = '3001';
describe('new tags', () => {
    beforeEach(() => {
      
      cy.fixture('ghost.json').as('ghost')
      cy.fixture('ghost.json').then((data)  => {
          user = data.user
          password = data.password            
      })
      cy.visit(`http://localhost:${port}/ghost/`)
      cy.wait(2000)
               
      
    })
    it('Set MetaData, MetaTitle = 300 characters', () => {           
            let titleTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)
            cy.get('div.gh-setting-first.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button').eq(0).click()
            cy.get('#metaTitle').clear().focus()            
            //cy.get('#metaTitle').focus() // Focus on the first input            
            cy.wait(1000)
            cy.get('#metaTitle').eq(0).type(titleTest.substring(0,300),{force: true})
            cy.contains('Save settings').click()
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
        })

        it('Set MetaData, MetaTitle < 300 characters', () => {           
            let titleTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)
            cy.get('div.gh-setting-first.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button').eq(0).click()
            cy.get('#metaTitle').clear().focus()                        
            cy.wait(1000)
            cy.get('#metaTitle').eq(0).type(titleTest.substring(0,299),{force: true})
            cy.contains('Save settings').click()
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
        })

        it('Set MetaData, MetaTitle > 300 characters', () => {           
            let titleTest= faker.lorem.slug(200)
            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)
            cy.get('div.gh-setting-first.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button').eq(0).click()
            cy.get('#metaTitle').clear().focus()            
            //cy.get('#metaTitle').focus() // Focus on the first input            
            cy.wait(1000)
            cy.get('#metaTitle').eq(0).type(titleTest.substring(0,301),{force: true})
            cy.contains('Save settings').click()
            cy.wait(500)
            cy.get(".gh-alert-content").should('be.visible')
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
            //cy.wait(100)
            //cy.contains('Leave').click()
        })

        it('Set MetaDescription, MetaDescription = 500 characters', () => {           
            let descriptionTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)
            cy.get('div.gh-setting-first.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button').eq(0).click()
            cy.get('#metaDescription').clear().focus()                        
            cy.wait(1000)
            cy.get('#metaDescription').eq(0).type(descriptionTest.substring(0,500),{force: true})
            cy.contains('Save settings').click()
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
        })

        it('Set MetaDescription, MetaDescription < 500 characters', () => {           
            let descriptionTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)
            cy.get('div.gh-setting-first.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button').eq(0).click()
            cy.get('#metaDescription').clear().focus()                        
            cy.wait(1000)
            cy.get('#metaDescription').eq(0).type(descriptionTest.substring(0,499),{force: true})
            cy.contains('Save settings').click()
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
        })

        it('Set MetaDescription, MetaDescription > 500 characters', () => {           
            let descriptionTest= faker.lorem.slug(200)
            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)
            cy.get('div.gh-setting-first.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button').eq(0).click()
            cy.get('#metaDescription').clear().focus()            
            cy.wait(1000)
            cy.get('#metaDescription').eq(0).type(descriptionTest.substring(0,501),{force: true})
            cy.contains('Save settings').click()
            cy.wait(500)
            cy.get(".gh-alert-content").should('be.visible')
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
            cy.wait(100)
            cy.contains('Leave').click()
        })
        it('Set Title , Title = 150 characters', () => {           
            let titleTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)            
            cy.get('div.gh-setting-first > div.gh-setting-action > button').eq(0).click()
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(0).clear().focus()            
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(0)
            .type(titleTest.substring(0,150),{force: true})
            cy.contains('Save settings').click()
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
        })

        it('Set Title , Title < 150 characters', () => {           
            let titleTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)            
            cy.get('div.gh-setting-first > div.gh-setting-action > button').eq(0).click()
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(0).clear().focus()            
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(0)
            .type(titleTest.substring(0,149),{force: true})
            cy.contains('Save settings').click()
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
        })

        it('Set Title , Title > 150 characters', () => {           
            let titleTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)            
            cy.get('div.gh-setting-first > div.gh-setting-action > button').eq(0).click()
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(0).clear().focus()            
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(0)
            .type(titleTest.substring(0,151),{force: true})
            cy.contains('Save settings').click()
            cy.wait(500)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > p.response').
            should('have.text', '\n    Title is too long\n\n    \n')
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
            cy.wait(100)
            cy.contains('Leave').click()
        })

        it('Set Description , Description = 200 characters', () => {           
            let descriptionTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)            
            cy.get('div.gh-setting-first > div.gh-setting-action > button').eq(0).click()
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(1).clear().focus()            
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(1)
            .type(descriptionTest.substring(0,200),{force: true})
            cy.contains('Save settings').click()
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
        })

        it('Set Description , Description < 200 characters', () => {           
            let descriptionTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)            
            cy.get('div.gh-setting-first > div.gh-setting-action > button').eq(0).click()
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(1).clear().focus()            
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(1)
            .type(descriptionTest.substring(0,199),{force: true})
            cy.contains('Save settings').click()
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
        })

        it('Set Description , Description > 200 characters', () => {           
            let descriptionTest= faker.lorem.slug(200)

            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
            cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
            cy.get('a[href="#/settings/general/"]').eq(0).click()
            cy.wait(500)            
            cy.get('div.gh-setting-first > div.gh-setting-action > button').eq(0).click()
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(1).clear().focus()            
            cy.wait(1000)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > input').eq(1)
            .type(descriptionTest.substring(0,201),{force: true})
            cy.contains('Save settings').click()
            cy.wait(500)
            cy.get('div.liquid-child.ember-view > div.gh-setting-content-extended > div.form-group.ember-view > p.response').
            should('have.text', '\n    \n\n    Description is too long\n')
            cy.wait(1000)
            cy.get('div.gh-nav-bottom').click()
            cy.wait(100)
            cy.get('a[href="#/signout/"]').click()
            cy.wait(100)
            cy.contains('Leave').click()
        })

   
        
        
    })

    
    