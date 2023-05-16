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

    createUsu(user: any){
      this.http.post("http://localhost:3000/Usuario", user).subscribe((res)=>{
        console.log(res);
      })
    }

    LoadUsu(){
      return this.http.get("http://localhost:3000/Usuario");
    }

    // Post

    onCreate(post: any){
      this.http.post("http://localhost:3000/posts", post).subscribe((res)=>{
        console.log(res);
      })
    }

    onLoad(){
      return this.http.get("http://localhost:3000/posts");

   }

   
//descripcion del tema 
  onCreatedes(Descripcion: any){
        this.http.post(" http://localhost:3000/Descripcion_del_tema", Descripcion).subscribe((res)=>{
          console.log(res);
        })
      }
  
      onLoades(){
        return this.http.get(" http://localhost:3000/Descripcion_del_tema");
}

//Problema
onCreatepro(Planteamiento: any){
  this.http.post(" http://localhost:3000/Planteamiento_del_problema", Planteamiento).subscribe((res)=>{
    console.log(res);
  })
}

onLoadpro(){
  return this.http.get(" http://localhost:3000/Planteamiento_del_problema");
}

//hipotesis 
onCreatehi(Hipo: any){
  this.http.post(" http://localhost:3000/Hipotesis", Hipo).subscribe((res)=>{
    console.log(res);
  })
}

onLoadhi(){
  return this.http.get(" http://localhost:3000/Hipotesis");
}

//objetivo 
onCreateob(objet: any){
  this.http.post(" http://localhost:3000/Objetivo_general", objet).subscribe((res)=>{
    console.log(res);
  })
}

onLoadob(){
  return this.http.get(" http://localhost:3000/Objetivo_general");
}

//justificacion
onCreatejus(justifica: any){
  this.http.post(" http://localhost:3000/Justificacion", justifica).subscribe((res)=>{
    console.log(res);
  })
}

onLoadjus(){
  return this.http.get(" http://localhost:3000/Justificacion");
}

}