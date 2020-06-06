import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIrouteService } from './apiroute.service';

@Injectable({
  providedIn: 'root'
})
export class VisiteurService {

  constructor(private http: HttpClient, private APIroute: APIrouteService) { }

  ListeVisiteur(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.APIroute.API_route}/visiteur/listeVisiteur.php`);
  }
}

