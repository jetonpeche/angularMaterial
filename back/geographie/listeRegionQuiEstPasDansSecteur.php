<?php
require '../header.php';
require '../dialogueBD.php';

$json = file_get_contents('php://input'); // Récupération du flux JSON
$geoJson = json_decode($json);

$idSecteur = $geoJson->idSecteur;

$dialog = new dialogueBD();

$listeRegion = $dialog->ListeRegionQuiEstPasDansSecteur($idSecteur);
$listeRegionNull = $dialog->ListeRegionNull($idSecteur);

$liste = array();

// cree un JSON a partir de listeRegionNull
foreach ($listeRegionNull as $ligne)
{
    array_push($liste, array(
        'id_region' => $ligne['id_region'],
        'nom_region' => $ligne['nom_region']
    ));
}

// complete le JSON a partir de listeRegion
foreach($listeRegion as $ligne)
{
    array_push($liste, array(
        'id_region' => $ligne['id_region'],
        'id_secteur' => $ligne['id_secteur'],
        'nom_region' => $ligne['nom_region'],
        'lib_secteur' => $ligne['lib_secteur']
    ));
}

echo json_encode($liste);