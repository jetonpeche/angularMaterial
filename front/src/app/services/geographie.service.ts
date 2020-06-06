import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIrouteService } from './apiroute.service';
import { Observable } from 'rxjs';
import { Secteur } from '../Models/secteur';

@Injectable({
  providedIn: 'root'
})
export class GeographieService {

  constructor(private http: HttpClient, private APIroute: APIrouteService) { }

  listeSecteur(): Observable<Secteur[]>
  {
    return this.http.get<Secteur[]>(`${this.APIroute.API_route}/geographie/listeSecteur.php`);
  }

  listeRegionDuSecteur(info): Observable<string[]>
  {
    return this.http.post<string[]>(`${this.APIroute.API_route}/geographie/listeRegionDuSecteur.php` , info);
  }

  listeRegionQuiEstPasDansSecteur(info): Observable<string[]>
  {
    return this.http.post<string[]>(`${this.APIroute.API_route}/geographie/listeRegionQuiEstPasDansSecteur.php`, info);
  }

  AjoutRegionDansSecteur(info, idSecteur): Observable<any>
  {
    return this.http.post<any>(`${this.APIroute.API_route}/geographie/ajoutRegionDansSecteur.php?idS=${idSecteur}`, info);
  }

  SupprRegionDansSecteur(info): Observable<any>
  {
    return this.http.post<any>(`${this.APIroute.API_route}/geographie/supprRegionDansSecteur.php`, info);
  }
}
