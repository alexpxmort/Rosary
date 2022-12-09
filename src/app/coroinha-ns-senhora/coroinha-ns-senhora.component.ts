import { Component } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-coroinha-ns-senhora',
  templateUrl: './coroinha-ns-senhora.component.html',
  styleUrls: ['./coroinha-ns-senhora.component.scss']
})
export class CoroinhaNsSenhoraComponent {
  date:Date = new Date();
  link:string = environment.LINK_COROINHA
}
