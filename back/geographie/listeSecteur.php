<?php
require '../header.php';
require '../dialogueBD.php';

$dialog = new dialogueBD();
$liste = $dialog->ListeSecteur();
echo json_encode($liste);