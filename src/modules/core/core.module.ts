import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { MesesTresSaoJoseComponent } from '../../app/meses-tres-sao-jose/meses-tres-sao-jose.component';
import { HttpClientModule } from '@angular/common/http';
import { NoveMesesNossaSenhoraComponent } from '../../app/pages/nove-meses-nossa-senhora/nove-meses-nossa-senhora.component';
import { PrayerComponent } from 'src/app/pages/prayer/prayer.component';


const MODULES= [
  CommonModule,
  FlexLayoutModule,
  BrowserModule,
  AppRoutingModule,
  MaterialModule,
  BrowserAnimationsModule,
  MatGridListModule,
  MatIconModule,
  HttpClientModule
]

const COMPONENTS = [
TercoComponent,
TercoVideoComponent,
SafePipe,
RosarioComponent,
HomiliaDiariaComponent,
PrayerComponent,
SaoJoseComponent,
CoroinhaNsSenhoraComponent,
MesesTresSaoJoseComponent,
NoveMesesNossaSenhoraComponent
]


@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  exports:  MODULES,
})
export class CoreModule { }
