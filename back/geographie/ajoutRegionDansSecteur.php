<?php
require '../header.php';
require '../dialogueBD.php';

$json = file_get_contents('php://input'); // Récupération du flux JSON
$geoJson = json_decode($json);

$idRegion = $geoJson->id_region;

$idSecteur = $_GET['idS'];

$dialog = new dialogueBD();
$dialog->AjoutRegionDansSecteur($idSecteur, $idRegion);

echo json_encode(true);