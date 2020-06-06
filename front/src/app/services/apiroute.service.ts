import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIrouteService {

  API_route: string = "http://127.0.0.1/AngularBlock3/back";

  constructor() { }
}
