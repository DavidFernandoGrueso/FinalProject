import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Justificacion } from '../itemss/Justificacion';

@Injectable({
  providedIn: 'root'
})
export class JustificacionService {

  constructor(private http: HttpClient) { }


  onCreatej(info: Justificacion){
    return this.http.post("http://localhost:3000/Justificacion", info)
   }
 
   onLoadj(){
     return this.http.get("http://localhost:3000/Justificacion");
 
  }
}

