import { Injectable } from '@angular/core';
import { Post } from '../itemss/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  onCreate(info: Post){
   return this.http.post("http://localhost:3000/posts", info)
  }

  onLoadp(){
    return this.http.get("http://localhost:3000/posts");

 }


}
