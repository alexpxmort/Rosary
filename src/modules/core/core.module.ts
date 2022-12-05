import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routes/app-routing.module';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TercoComponent } from '../../pages/terco/terco.component';


const MODULES= [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  MaterialModule,
  BrowserAnimationsModule,
]

const COMPONENTS = [
TercoComponent
]


@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  exports:  MODULES
})
export class CoreModule { }
