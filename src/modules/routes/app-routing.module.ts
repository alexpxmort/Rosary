import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomiliaDiariaComponent } from '../../app/pages/homilia-diaria/homilia-diaria.component';
import { RosarioComponent } from '../../app/pages/rosario/rosario.component';
import { TercoVideoComponent } from '../../app/terco-video/terco-video.component';
import { TercoComponent } from '../../pages/terco/terco.component';

const routes: Routes = [
  {
    path:'terco',component:TercoComponent,title:'Terco'
  },
  {
    path:'tercovideo',component:TercoVideoComponent,title:'Terco Em Video'
  },
  {
    path:'rosario',component:RosarioComponent,title:'Rosario'
  },
  {
    path:'homilia-diaria',component:HomiliaDiariaComponent,title:'Homilia Diaria'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
