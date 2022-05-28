import {faker} from '@faker-js/faker'

let user = '';
let password = '';
let port = '3001';
let tagName = '';
describe('new tags', () => {
    beforeEach(() => {
      
      cy.fixture('ghost.json').as('ghost')
      cy.fixture('ghost.json').then((data)  => {
          user = data.user
          password = data.password            
      })
      cy.visit(`http://localhost:${port}/ghost/`)
      cy.wait(2000)
      tagName = faker.lorem.sentence(100)
      
    })
    it('Olvido de password con vieja incorrecta - nuevo y confirmación iguales', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type('ContraseñaIncorrecta')
        cy.get('input[autocomplete="new-password"]').type('NuevaContraseñaIncorrecta')
        cy.get('input[id="user-new-password-verification"').eq(0).type('NuevaContraseñaIncorrecta')

        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })


    it('Olvido de password con vieja correcta - nuevo  vacio y confirmación lleno', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type(password)

        cy.get('input[id="user-new-password-verification"').eq(0).type('NuevaContraseñaIncorrecta')

        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })


    it('Olvido de password con vieja correcta - nuevo  lleno y confirmación vacio', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
       
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type(password)
        cy.get('input[autocomplete="new-password"]').type('NuevaContraseñaIncorrecta')
        

        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })

    it('Olvido de password con vieja correcta - nuevo  vacio y confirmación vacio', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type(password)
        
        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })

    it('Olvido de password con vieja correcta - nuevo  lleno < 10 y confirmación lleno', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type(password)
        cy.get('input[autocomplete="new-password"]').type('NuevaCont')
        cy.get('input[id="user-new-password-verification"').eq(0).type('NuevaCont')

        
        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })

    it('Olvido de password con vieja correcta - nuevo  lleno = 10 y confirmación lleno', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type(password)
        cy.get('input[autocomplete="new-password"]').type('NuevaContr')
        cy.get('input[id="user-new-password-verification"').eq(0).type('NuevaContr')

        
        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })

    it('Olvido de password con vieja correcta - nuevo  lleno > 10 y confirmación lleno', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type(password)
        cy.get('input[autocomplete="new-password"]').type('NuevaContra')
        cy.get('input[id="user-new-password-verification"').eq(0).type('NuevaContra')

        
        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })


    it('Olvido de password con vieja correcta - nuevo  lleno  y confirmación lleno <10', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type(password)
        cy.get('input[autocomplete="new-password"]').type('NuevaCont')
        cy.get('input[id="user-new-password-verification"').eq(0).type('NuevaCont')

        
        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })

    it('OOlvido de password con vieja correcta - nuevo  lleno  y confirmación lleno =10', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type(password)
        cy.get('input[autocomplete="new-password"]').type('NuevaContr')
        cy.get('input[id="user-new-password-verification"').eq(0).type('NuevaContr')

        
        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })

    it('Olvido de password con vieja correcta - nuevo  lleno  y confirmación lleno >10', () => { 
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        
        cy.wait(5000)

        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)
        cy.get('input[autocomplete="current-password"]').type(password)
        cy.get('input[autocomplete="new-password"]').type('NuevaContra')
        cy.get('input[id="user-new-password-verification"').eq(0).type('NuevaContra')

        
        cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
 
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })
})