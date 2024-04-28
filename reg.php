
 <?php
  include('connection.php');

// Vérification de la soumission du formulaire
if ($_SERVER["REQUEST_METHOD"]=="POST") {
  // Récupération des données du formulaire
  $username = $_POST["user"];
  $password = $_POST["pass"];

  // Insertion des données dans la table
  $sql = "INSERT INTO login ('username', 'password') VALUES ($username, $password)";

  if (mysqli_query($conn, $sql)) {
    echo "Inscription réussie !";
  } else {
    echo "Erreur : " . $sql . "<br>" . mysqli_error($conn);
  }
}
?>
