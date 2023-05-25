import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { JsonserveService } from 'src/app/services/jsonserve.service';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { Router } from '@angular/router';






export class USUARIO{
  public id: number = 0;
  public username!: String
  public password!: String

  setdata(data: any){
    this.id = data.id
    this.username = data.username
    this.password = data.password
  }
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {



 
  public usern = new USUARIO();
    public Usuario: USUARIO[] = [];
    public Usern: USUARIO = new USUARIO
    public isLoggedIn = false;
  
    constructor(
      public jsons : JsonserveService,
      private router: Router
      ) {}

  


    CargaUsu()  {
      this.Usuario = [];
      this.jsons.LoadUsu().subscribe((res: any) => {
        this.Usuario = res.map((item: any) => {
          const usuario = new USUARIO();
          usuario.setdata(item);
          return usuario;
        });
      });
    }
  
     SaveUsu(){
          this.jsons.createUsu(this.usern);
          this.CargaUsu();
          this.usern = new USUARIO();
          
        }

        login() {

          const { username, password } = this.usern;

          if (username && password) {
            const usuario = this.Usuario.find(u => u.username === username && u.password === password);
        
            if (usuario) {
              console.log('Inicio de sesión exitoso');
              this.isLoggedIn = true;
        
              this.router.navigate(['/Main']);
            } else {
              console.log('Credenciales incorrectas');
              
            }
          } else {
            console.log('Ingrese el nombre de usuario y la contraseña');
            
          }
        }
        


        ngOnInit() {
          this.CargaUsu();
        }
}
