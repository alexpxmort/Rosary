import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoreModule } from '../modules/core/core.module';

import { AppComponent } from './app.component';
import { MesesTresSaoJoseComponent } from './meses-tres-sao-jose/meses-tres-sao-jose.component';


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
