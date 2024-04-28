function login() {
  // Récupération des valeurs des champs email et password
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Vérification des informations de connexion
  if (email === "monadresse@mail.com" && password === "monmotdepasse") {
    // Si les informations sont correctes, on affiche l'historique de don de sang
    const historique = document.getElementById("historique");
    historique.innerHTML =
      "<h2>Mon historique de don de sang :</h2><ul><li>Don du 01/05/2023</li><li>Don du 14/02/2023</li><li>Don du 21/11/2022</li></ul>";
  } else {
    // Sinon, on affiche un message d'erreur
    alert("Adresse e-mail ou mot de passe incorrect.");
  }
}
