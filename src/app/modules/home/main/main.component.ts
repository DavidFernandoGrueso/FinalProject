import { Component, OnInit } from '@angular/core';
import { JsonserveService } from 'src/app/services/jsonserve.service';



export class Post{
  public id: number = 0;
  public image!: String
  public title!: String
  public detalle!: String

  setdata(data: any){
    this.id = data.id
    this.title = data.title
    this.detalle = data.detalle
  }

}

export class Descripcion_tema{
  public id: number = 0;
  public tema!: String
  public descripcion!: String

  setdata(data: any){
    this.id = data.id
    this.tema = data.tema
    this.descripcion = data.descripcion
  }

}

export class Planteamiento_problema{
  public id: number = 0;
  public problema!: String

  setdata(data: any){
    this.id = data.id
    this.problema = data.problema
  }

}

export class Hipotesi{
  public id: number = 0;
  public hipote!: String

  setdata(data: any){
    this.id = data.id
    this.hipote = data.hipote
  }

}

export class Objetivo__general{
  public id: number = 0;
  public General!: String

  setdata(data: any){
    this.id = data.id
    this.General = data.General
  }

}

export class Justificacionn{
  public id: number = 0;
  public justificado!: String

  setdata(data: any){
    this.id = data.id
    this.justificado = data.justificado
  }

}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit{
  public post = new Post();
  public posts: Post[] = [];
  title = 'PROJECT';

 

  public Descripcion = new Descripcion_tema();
  public Descripcion_del_tema: Descripcion_tema[] = [];
  tema = "TEMA";

  public Planteamiento = new Planteamiento_problema();
  public Planteamiento_del_problema: Planteamiento_problema[] = [];
  problema = ' ';

  public Hipo = new Hipotesi();
  public Hipotesis: Hipotesi[] = [];
  hipote = ' ';

  public objet = new Objetivo__general();
  public Objetivo_general: Objetivo__general[] = [];
  General = ' ';

  public justifica = new Justificacionn();
  public Justificacion: Justificacionn[] = [];
  justificado = ' ';
  constructor(
    public jsons : JsonserveService
    )
  {
    
  }

  ngOnInit() {
    this.onCargar();
    this.onCargades();
    this.onCargahi();
    this.onCargajus();
    this.onCargapro();
    this.onCargaob();
  }


onCargar() {
this.posts = []
this.jsons.onLoad().subscribe((res: any)=>{
  res.forEach((iten: any)=>{
      let aux = new Post
      aux.setdata(iten)
      this.posts.push(aux)

  })
});
}


  onSave(){
    this.jsons.onCreate(this.post);
    this.onCargar();
  }







//descripcion del tema

onCargades() {
this.Descripcion_del_tema = []
this.jsons.onLoades().subscribe((res: any)=>{
res.forEach((item: any)=>{
    let aux = new Descripcion_tema
    aux.setdata(item)
    this.Descripcion_del_tema.push(aux)

})
});
}

onSavedes(){
this.jsons.onCreatedes(this.Descripcion);
this.onCargades();
}

//Planteamiento_del_problema

onCargapro() {
this.Planteamiento_del_problema = []
this.jsons.onLoadpro().subscribe((res: any)=>{
res.forEach((item: any)=>{
    let aux = new Planteamiento_problema
    aux.setdata(item)
    this.Planteamiento_del_problema.push(aux)

})
});
}

onSavepro(){
this.jsons.onCreatepro(this.Planteamiento);
this.onCargapro();
}

//hipotesis
onCargahi() {
this.Hipotesis = []
this.jsons.onLoadhi().subscribe((res: any)=>{
res.forEach((item: any)=>{
    let aux = new Hipotesi
    aux.setdata(item)
    this.Hipotesis.push(aux)

})
});
}

onSavehi(){
this.jsons.onCreatehi(this.Hipo);
this.onCargahi();
}

//objetivo 
onCargaob() {
this.Objetivo_general = []
this.jsons.onLoadob().subscribe((res: any)=>{
res.forEach((item: any)=>{
    let aux = new Objetivo__general
    aux.setdata(item)
    this.Objetivo_general.push(aux)

})
});
}

onSaveob(){
this.jsons.onCreateob(this.objet);
this.onCargaob();
}

//justificacion
onCargajus() {
this.Justificacion = []
this.jsons.onLoadjus().subscribe((res: any)=>{
res.forEach((item: any)=>{
    let aux = new Justificacionn
    aux.setdata(item)
    this.Justificacion.push(aux)

})
});
}

onSavejus(){
this.jsons.onCreatejus(this.justifica);
this.onCargajus();
}

}

