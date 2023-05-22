import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hipotesis } from '../itemss/Hipotesis';


@Injectable({
  providedIn: 'root'
})
export class HipotesisService {

  constructor(private http: HttpClient) { }

  onCreateh(info: Hipotesis){
    return this.http.post("http://localhost:3000/Hipotesis", info)
   }
 
   onLoadh(){
     return this.http.get("http://localhost:3000/Hipotesis");
 
  }
}
