import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/itemss/post';
import { JsonserveService } from 'src/app/services/jsonserve.service';
import { PostService } from 'src/app/services/post.service';
import { DescripcionTemaService } from 'src/app/services/descripcion_tema.service';
import { Descripcion_tema } from 'src/app/itemss/Descripcion_tema';
import { HipotesisService } from 'src/app/services/hipotesis.service';
import { Hipotesis } from 'src/app/itemss/Hipotesis';
import { JustificacionService } from 'src/app/services/justificacion.service';
import { Justificacion } from 'src/app/itemss/Justificacion';
import { ElementosService } from 'src/app/services/elementos.service';
import { elementos } from 'src/app/itemss/elementos';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})


export class MainComponent implements OnInit{
  public posts: Post[] = []
  public Descripcion: Descripcion_tema = new Descripcion_tema
  public Hip: Hipotesis = new Hipotesis
  public justi: Justificacion = new Justificacion
  public ite: elementos = new elementos

  


  constructor(
    public jsons : JsonserveService,
    public postServices : PostService,
    public descripcion_temaServices : DescripcionTemaService,
    public hipotesisServices : HipotesisService,
    public justificacionServices : JustificacionService,
    public elementosServices : ElementosService

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

  onSaveh(){
    this.hipotesisServices.onCreateh(this.Hip).subscribe(()=>{
      this.Hip = new Hipotesis
    })
  }

  onSavej(){
    this.justificacionServices.onCreatej(this.justi).subscribe(()=>{
      this.justi = new Justificacion
    })
  }

  onSavee(){
    this.elementosServices.onCreatee(this.ite).subscribe(()=>{
      this.ite = new elementos
    })
  }

  publicado(Iten: Post){
    this.Descripcion.post = Iten.id.toString();

  }



}

