import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoreModule } from '../modules/core/core.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
