describe('Page de Login', () => {
    it('affiche une erreur avec des identifiants invalides', () => {
      // Visite la page de login
      cy.visit('http://localhost:5173/adminlogin'); 
  
      // Remplit les champs de connexion avec des données invalides
      cy.get('input[name="email"]').type('admin@gmail.com');
      cy.get('input[name="password"]').type('12345');
  
     
      cy.get('button').click()
  
      
    });
  });
  