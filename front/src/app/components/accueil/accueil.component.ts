import {Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VisiteurService } from 'src/app/services/visiteur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeVisiteur: string[];

  dataSource: MatTableDataSource<string>;

  constructor(private visiteur: VisiteurService) { }

  displayedColumns: string[] = ['Nom', 'Prenom', 'Laboratoire', 'Ajouter'];
  

  ngOnInit() 
  {   
    this.visiteur.ListeVisiteur().subscribe(
      (liste) =>
      {
        this.listeVisiteur = liste;
        this.dataSource = new MatTableDataSource<string>(this.listeVisiteur);
      });
  }

  // filtre le tableau
  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
