import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Descripcion_tema } from '../itemss/Descripcion_tema';

@Injectable({
  providedIn: 'root'
})
export class DescripcionTemaService {
  constructor(
    private http: HttpClient
  ) { }

  onCreated(info: Descripcion_tema){
   return this.http.post("http://localhost:3000/Descripcion_tema", info)
  }

  onLoadd(){
    return this.http.get("http://localhost:3000/Descripcion_tema");

 }
}
