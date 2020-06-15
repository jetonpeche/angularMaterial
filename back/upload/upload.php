<?php
require 'header.php';

// recup de id
echo $id = $_POST['id'];

// upload fichier dans dossier asset angular
// $_FILES => fichier choisi dans input
$dossier_cible = "../../front/src/assets/";
$targetFile = $dossier_cible.basename($_FILES['img']['name']);
move_uploaded_file($_FILES['img']['tmp_name'], $targetFile);