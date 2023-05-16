import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { JsonserveService } from 'src/app/services/jsonserve.service';
import { FormsModule } from '@angular/forms';


@NgModule({

  imports: [
 
   FormsModule
  ],
  providers: []
})
export class AppModule { }


export class USUARIO{
  public id: number = 0;
  public username!: String
  public pasword!: String

  setdata(data: any){
    this.id = data.id
    this.username = data.username
    this.pasword = data.pasword
  }
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  public user = new USUARIO();
    public Usuario: USUARIO[] = [];
    usern = "";
  
    constructor(
      public jsons : JsonserveService
      )
    {
      
    }

    CargaUsu() {
      this.Usuario = []
      this.jsons.LoadUsu().subscribe((res: any)=>{
        res.forEach((iten: any)=>{
            let aux = new USUARIO
            aux.setdata(iten)
            this.Usuario.push(aux)
  
        })
      });
    }
  
     SaveUsu(){
          this.jsons.createUsu(this.user);
          this.CargaUsu();
        }


        ngOnInit() {
          this.CargaUsu();
        }
}
