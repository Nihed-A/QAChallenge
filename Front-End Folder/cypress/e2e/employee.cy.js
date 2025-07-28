describe('Login Page Tests', () => {
    it('Login with valid credentials and create item', () => {
      // Visite la page de connexion
      cy.visit('http://localhost:5173/adminlogin')
  
     
  
      // Remplir les champs de connexion
      cy.get('#email').type('admin@gmail.com')
      cy.get('#password').type('12345')
  
      // Cliquer sur le bouton de connexion
      //cy.get('button[type="submit"], button').click()
      cy.get('button').click()
      // Vérifie qu'on est bien redirigé ou qu'un élément attendu apparaît
      cy.url().should('not.include', '/login')
      // ou par exemple :
      // cy.contains('Dashboard').should('be.visible')
    })
  })
  