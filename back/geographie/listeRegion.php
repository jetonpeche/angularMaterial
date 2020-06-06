<?php
require '../header.php';
require '../dialogueBD.php';

$dialog = new dialogueBD();
$liste = $dialog->ListeRegion();
echo json_encode($liste);