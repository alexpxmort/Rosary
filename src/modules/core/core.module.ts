import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routes/app-routing.module';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TercoComponent } from '../../pages/terco/terco.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { TercoVideoComponent } from '../../app/terco-video/terco-video.component';
import { SafePipe } from '../../app/safe.pipe';
import { RosarioComponent } from '../../app/pages/rosario/rosario.component';
import { SaoJoseComponent } from '../../app/sao-jose/sao-jose.component';
import { HomiliaDiariaComponent } from '../../app/pages/homilia-diaria/homilia-diaria.component';
import { CoroinhaNsSenhoraComponent } from '../../app/coroinha-ns-senhora/coroinha-ns-senhora.component';


const MODULES= [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  MaterialModule,
  BrowserAnimationsModule,
  MatGridListModule,
  MatIconModule
]

const COMPONENTS = [
TercoComponent,
TercoVideoComponent,
SafePipe,
RosarioComponent,
HomiliaDiariaComponent,
SaoJoseComponent,
CoroinhaNsSenhoraComponent
]


@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  exports:  MODULES
})
export class CoreModule { }
