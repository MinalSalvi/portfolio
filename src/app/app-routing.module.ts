import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"",component:MainNavComponent},
  {path:"content",component:HomeComponent},
  {path:"Qualification",component:TableComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
