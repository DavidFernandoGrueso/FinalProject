import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { elementos } from '../itemss/elementos';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  constructor(private http: HttpClient) { }

  onCreatee(info: elementos){
    return this.http.post("http://localhost:3000/elementos", info)
   }
 
   onLoade(){
     return this.http.get("http://localhost:3000/elementos");
 
  }
}
