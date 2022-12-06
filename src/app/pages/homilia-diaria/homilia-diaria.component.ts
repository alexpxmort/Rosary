import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environment';

@Component({
  selector: 'app-homilia-diaria',
  templateUrl: './homilia-diaria.component.html',
  styleUrls: ['./homilia-diaria.component.scss']
})
export class HomiliaDiariaComponent implements OnInit {
  ngOnInit(): void {
    console.log()
  }
  title:string = 'Homilia Diaria'
  URL_HOMILIA:string = environment.LINK_HOMILIA || '';

  date:Date = new Date()

  url:string = this.URL_HOMILIA
}
