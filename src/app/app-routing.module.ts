import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"data", component:DataComponent},
  {path:"", redirectTo:"data", pathMatch:'full'},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
