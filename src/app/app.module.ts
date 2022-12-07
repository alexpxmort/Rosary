import { NgModule } from '@angular/core';
import { CoreModule } from '../modules/core/core.module';

import { AppComponent } from './app.component';
import { TercoVideoComponent } from './terco-video/terco-video.component';
import { SafePipe } from './safe.pipe';
import { RosarioComponent } from './pages/rosario/rosario.component';
import { HomiliaDiariaComponent } from './pages/homilia-diaria/homilia-diaria.component';
import { SaoJoseComponent } from './sao-jose/sao-jose.component';

@NgModule({
  declarations: [
    AppComponent,
    TercoVideoComponent,
    SafePipe,
    RosarioComponent,
    HomiliaDiariaComponent,
    SaoJoseComponent
  ],
  imports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
