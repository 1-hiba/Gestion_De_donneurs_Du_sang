const form = document.getElementById("don-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const date = document.getElementById("date").value;
  const heure = document.getElementById("heure").value;
  const typeDon = document.getElementById("type-don").value;
  console.log(
    `Nom : ${nom}\nEmail : ${email}\nTéléphone : ${tel}\nDate de rendez-vous : ${date}\nHeure de rendez-vous : ${heure}\nType de don : ${typeDon}`
  );
  // Ajouter le code pour envoyer le formulaire à un serveur ou une base de données
});
