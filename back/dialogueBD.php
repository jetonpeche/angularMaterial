<?php
require_once 'connexion.php';

class DialogueBD
{   

    public function ListeVisiteur()
    {
        $conn = Connexion::getConnexion();
        $sql = "SELECT * FROM visiteur v JOIN laboratoire l ON v.id_laboratoire = l.id_laboratoire";
        $sth = $conn->prepare($sql);
        $sth->execute();

        $liste = $sth->fetchAll();
        return $liste;
    }

    public function ListeSecteur()
    {
        $conn = Connexion::getConnexion();
        $sql = "SELECT * FROM secteur";
        $sth = $conn->prepare($sql);
        $sth->execute();

        $liste = $sth->fetchAll();
        return $liste;
    }

    public function ListeRegion()
    {
        $conn = Connexion::getConnexion();
        $sql = "SELECT * FROM region";
        $sth = $conn->prepare($sql);
        $sth->execute();

        $liste = $sth->fetchAll();
        return $liste;
    }

    public function ListeRegionDuSecteur($idSecteur)
    {
        $conn = Connexion::getConnexion();
        $sql = "SELECT * FROM secteur s JOIN region r ON s.id_secteur = r.id_secteur WHERE s.id_secteur = ?";
        $sth = $conn->prepare($sql);
        $sth->execute(array($idSecteur));

        $liste = $sth->fetchAll();
        return $liste;
    }

    public function ListeRegionQuiEstPasDansSecteur($idSecteur)
    {
        $conn = Connexion::getConnexion();
        $sql = "SELECT * FROM region r 
                JOIN secteur s ON r.id_secteur = s.id_secteur 
                WHERE r.id_secteur NOT IN (SELECT id_secteur FROM secteur WHERE id_secteur = ?)
                ORDER BY nom_region";
                
        $sth = $conn->prepare($sql);
        $sth->execute(array($idSecteur));

        $liste = $sth->fetchAll();
        return $liste;
    }

    public function ListeRegionNull($idSecteur)
    {
        $conn = Connexion::getConnexion();
        $sql = "SELECT * FROM region WHERE id_secteur is null";
                
        $sth = $conn->prepare($sql);
        $sth->execute(array($idSecteur));

        $liste = $sth->fetchAll();
        return $liste;
    }

    public function AjoutRegionDansSecteur($idSecteur, $idRegion)
    {
        $conn = Connexion::getConnexion();
        $sql = "UPDATE region SET id_secteur = ? WHERE id_region = ?";
                
        $sth = $conn->prepare($sql);
        $sth->execute(array($idSecteur, $idRegion));
    }

    public function SupprRegionDansSecteur($idRegion)
    {
        $conn = Connexion::getConnexion();
        $sql = "UPDATE region SET id_secteur = null WHERE id_region = ?";
                
        $sth = $conn->prepare($sql);
        $sth->execute(array($idRegion));
    }
}

