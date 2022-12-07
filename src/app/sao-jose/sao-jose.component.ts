import { Component } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-sao-jose',
  templateUrl: './sao-jose.component.html',
  styleUrls: ['./sao-jose.component.scss']
})
export class SaoJoseComponent {
  title:string = 'Sao Jose Oracoes'
  LINKS_SAO_JOSE:string[] = environment.LINKS_SAO_JOSE || [];

  date:Date = new Date()

  links:string[] = this.LINKS_SAO_JOSE
}
