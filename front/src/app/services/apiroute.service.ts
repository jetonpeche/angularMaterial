import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIrouteService {

  API_route: string = "http://127.0.0.1/AngularBlock3/back";

  constructor(private http: HttpClient) { }

  Envoie(info): Observable<any>
  {
    return this.http.post<any>(this.API_route + "upload/upload.php", info);
  }
}
