import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/itemss/post';
import { JsonserveService } from 'src/app/services/jsonserve.service';
import { PostService } from 'src/app/services/post.service';
import { DescripcionTemaService } from 'src/app/services/descripcion_tema.service';
import { Descripcion_tema } from 'src/app/itemss/Descripcion_tema';








@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})


export class MainComponent implements OnInit{
  public posts: Post[] = []
  public Descripcion: Descripcion_tema = new Descripcion_tema

  




  constructor(
    public jsons : JsonserveService,
    public postServices : PostService,
    public descripcion_temaServices : DescripcionTemaService
    ){   }

  ngOnInit() {
    this.postServices.onLoadp().subscribe((res: any)=>{
      res.forEach((element:any)  => {
        let tem = new Post()
        tem.set(element)
        this.posts.push(tem)
      });
    })
   
  }

  onSaved(){
    this.descripcion_temaServices.onCreated(this.Descripcion).subscribe(()=>{
      this.Descripcion = new Descripcion_tema
    })
  }

  publicado(Iten: Post){
    this.Descripcion.post = Iten.id.toString();

  }



}

