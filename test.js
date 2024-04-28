let age = parseInt(document.getElementById("age").value);
let poids = parseInt(document.getElementById("poids").value);
//let mybtn=documenT.getElementById("f1");
 //mybtn.onsubmit = function(){
    // Vérifier les conditions d'éligibilité
if (age >= 18 && poids <=65 ) {
    // Si le donneur est éligible, afficher la page de confirmation de don
    window.location.href="register.html";
  } else {
    // Si le donneur n'est pas éligible, afficher la page de refus de don
    window.location.href="home.html";
  }
//};
 