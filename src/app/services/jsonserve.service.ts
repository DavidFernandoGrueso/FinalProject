import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class JsonserveService {

  constructor(
    public http: HttpClient
    ) {  }

    // usuario

    createUsu(usern: any){
      this.http.post("http://localhost:3000/Usuario", usern).subscribe((res)=>{
        console.log(res);
      })
    }

    LoadUsu(){
      return this.http.get("http://localhost:3000/Usuario");

    }
   


}