import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { GeographieService } from 'src/app/services/geographie.service';
import { Secteur } from 'src/app/Models/secteur';

@Component({
  selector: 'app-region-secteur',
  templateUrl: './region-secteur.component.html',
  styleUrls: ['./region-secteur.component.css']
})
export class RegionSecteurComponent implements OnInit {

  listeRegion: string[] = [];
  listeSecteur: Secteur[] = [];

  // liste des regions d'un secteur
  listeUnSecteurRegion: string[] = [];

  secteurChoisi: string;
  id_secteur: string;

  constructor(private geo: GeographieService) { }

  ngOnInit(): void 
  {
    this.geo.listeSecteur().subscribe(
      (liste) =>
      {
        this.listeSecteur = liste;
      });
  }

  onListeRegionDuSecteur(form)
  {
    this.geo.listeRegionDuSecteur(form.value).subscribe(
      (liste) =>
      {
        this.listeUnSecteurRegion = liste;
        this.AfficheSecteurChoisi(form.value['idSecteur'], this.listeSecteur);      
      });

    this.geo.listeRegionQuiEstPasDansSecteur(form.value).subscribe(
      (liste) =>
      {
        this.listeRegion = liste;
      });
  }


  private AfficheSecteurChoisi(idSecteur: string, listSecteur: Secteur[])
  {
    for (const unSecteur of listSecteur)
    {
      if(idSecteur == unSecteur.id_secteur)
      {
        this.secteurChoisi = unSecteur.lib_secteur;
        this.id_secteur = unSecteur.id_secteur;
        break;
      }
    }
  }


  // deplace un element d'une liste
  drop(event: CdkDragDrop<string[]>) 
  {
    // si element deplacer est tjr dans la meme liste
    if (event.previousContainer === event.container) 
    {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    // si element est deplace vers une autre liste 
    else 
    {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      const infoRecuperer = event.item.data;

      // si la region est dans le secteur => supprimer
      if(infoRecuperer['id_secteur'] == this.id_secteur)
      {
        this.geo.SupprRegionDansSecteur(infoRecuperer).subscribe(() => {})
      }

      // si la region est pas dans le secteur => ajouter
      else
      {
        this.geo.AjoutRegionDansSecteur(infoRecuperer, this.id_secteur).subscribe(() => {});
      }
    }
  }
}
