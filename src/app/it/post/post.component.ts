import { Component, OnInit  } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Carrera } from 'src/app/itemss/carrera'; 
import { Post } from 'src/app/itemss/post';
import { Router } from '@angular/router';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  public post: Post = new Post
  public carrera : Carrera[] = []
  constructor(
  private postServices: PostService,
  private carreraServices: CarreraService,
  public route: Router

  ){}

  ngOnInit() {

    this.carreraServices.onLoad().subscribe((res: any)=>{
      res.forEach((element:any)  => {
        let tem = new Carrera(element)
        this.carrera.push(tem)
      });
    })
   }

  onSave(){
    this.postServices.onCreate(this.post).subscribe(()=>{
      this.route.navigate(["/"])
    })
  }


}
