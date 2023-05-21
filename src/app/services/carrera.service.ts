import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrera } from '../itemss/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http: HttpClient
    ) { }

    onLoad(){
      return this.http.get("http://localhost:3000/carreras");
  
   }
}
