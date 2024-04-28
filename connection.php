<?php
// Informations d'identification pour la base de données
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "bd2";

// Connexion à la base de données
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Vérification de la connexion
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>