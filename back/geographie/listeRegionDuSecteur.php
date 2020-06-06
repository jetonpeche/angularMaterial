<?php
require '../header.php';
require '../dialogueBD.php';

$json = file_get_contents('php://input'); // Récupération du flux JSON
$geoJson = json_decode($json);

$idSecteur = $geoJson->idSecteur;

$dialog = new dialogueBD();
$liste = $dialog->ListeRegionDuSecteur($idSecteur);
echo json_encode($liste);