<?php
require '../header.php';
require '../dialogueBD.php';

$dialog = new dialogueBD();
$liste = $dialog->ListeVisiteur();
echo json_encode($liste);