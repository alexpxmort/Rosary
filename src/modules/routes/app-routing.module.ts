import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoroinhaNsSenhoraComponent } from '../../app/coroinha-ns-senhora/coroinha-ns-senhora.component';
import { MesesTresSaoJoseComponent } from '../../app/meses-tres-sao-jose/meses-tres-sao-jose.component';
import { HomiliaDiariaComponent } from '../../app/pages/homilia-diaria/homilia-diaria.component';
import { NoveMesesNossaSenhoraComponent } from '../../app/pages/nove-meses-nossa-senhora/nove-meses-nossa-senhora.component';
import { RosarioComponent } from '../../app/pages/rosario/rosario.component';
import { SaoJoseComponent } from '../../app/sao-jose/sao-jose.component';
import { TercoVideoComponent } from '../../app/terco-video/terco-video.component';
import { TercoComponent } from '../../pages/terco/terco.component';
import { PrayerComponent } from 'src/app/pages/prayer/prayer.component';

const routes: Routes = [
  {
    path:'reflexao',component:PrayerComponent,title:'Reflexao'
  },
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
  },
  {
    path:'sao-jose',component:SaoJoseComponent,title:'Sao Jose'
  },
  {
    path:'tres-meses-sao-jose',component:MesesTresSaoJoseComponent,title:'3 Meses Sao Jose'
  },
  {
    path:'nove-meses-nossa-senhora',component:NoveMesesNossaSenhoraComponent,title:'9 Meses Nossa Senhora'
  },
  {
    path:'coroinha-ns-senhora',component:CoroinhaNsSenhoraComponent,title:'Coroinha Ns Senhora'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
