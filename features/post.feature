Feature: Post

  @post
  Scenario: Post a new post
    Given JE SUIS SUR LA PAGE D'ACCUEIL
    When JE ME LOGUE AVEC UN COMPTE EXISTANT
    When I click on the post button
    Then JE remplit le formuaire avec les informations suivantes  titre "Qa testeur_integration"  contenue "je suis isaac tchantcho  5,ans d'experience en it dont 4 en test j'ai eu a taviller sur plusiseur projet le premier ... le deuxieme " et je soumet 
    Then je suis redirigé vers la page admin et le message de succes s affiche 
  
