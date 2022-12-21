import { Component } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-meses-tres-sao-jose',
  templateUrl: './meses-tres-sao-jose.component.html',
  styleUrls: ['./meses-tres-sao-jose.component.scss']
})
export class MesesTresSaoJoseComponent {
  date:Date = new Date();
  link:string = environment.LINK_3_MESES_SAO_JOSE
}
