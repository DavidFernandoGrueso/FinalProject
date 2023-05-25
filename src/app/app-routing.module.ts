import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './it/post/post.component';
import { MainComponent } from './modules/home/main/main.component';



const routes: Routes = [
  {
    path: "", 
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
 },
  {path: "Main/post", component: PostComponent},
  {path: "Main", component: MainComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public isLoggedIn = false;
 }

