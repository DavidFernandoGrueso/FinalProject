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
  public elemento : elementos[] = []
  public posts: Post[] = []
  public Descripcion: Descripcion_tema = new Descripcion_tema
  public Descripcion_tema: Descripcion_tema[] = []
  public Hip: Hipotesis = new Hipotesis
  public justi: Justificacion = new Justificacion
  
  public descripcionId: number | undefined;

  Mostrartwo: boolean = false
  Mostrarthree : boolean = false

  


  constructor(
    public jsons : JsonserveService,
    public postServices : PostService,
    public descripcion_temaServices : DescripcionTemaService,
    public hipotesisServices : HipotesisService,
    public justificacionServices : JustificacionService,
    public elementosServices : ElementosService,
    

    ){   }

  ngOnInit() {
    this.postServices.onLoadp().subscribe((res: any)=>{
      res.forEach((element:any)  => {
        let tem = new Post()
        tem.set(element)
        this.posts.push(tem)


      });
    })

    this.elementosServices.onLoade().subscribe((res: any)=>{
      res.forEach((element:any)  => {
        let tem = new elementos(element)
        this.elemento.push(tem) });
      })
   
  }

  onSaved(){
    this.descripcion_temaServices.onCreated(this.Descripcion).subscribe(()=>{
      this.Mostrartwo = true;
       
      // Asignar el ID de post a la propiedad descripcionId
    const postId = this.Descripcion.post;
    const post = this.posts.find((item) => item.id.toString() === postId);
    this.descripcionId = post ? post.id : undefined;
    })
  }

  onSaveh(){
    this.hipotesisServices.onCreateh(this.Hip).subscribe(()=>{
      this.Mostrarthree = true;
    })
  }

  onSavej(){
      this.justificacionServices.onCreatej(this.justi).subscribe(()=>{
      this.justi = new Justificacion

      const postId = this.Descripcion.post;
      const post = this.posts.find((item) => item.id.toString() === postId);
      this.descripcionId = post ? post.id : undefined;
    })
  }



  publicado(Iten: Post){
    this.Descripcion.post = Iten.id.toString();
  }






}

