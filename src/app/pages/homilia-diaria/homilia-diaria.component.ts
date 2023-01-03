import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Component({
  selector: 'app-homilia-diaria',
  templateUrl: './homilia-diaria.component.html',
  styleUrls: ['./homilia-diaria.component.scss']
})
export class HomiliaDiariaComponent implements OnInit {

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getVideoHomilia()
  }
  title:string = 'Homilia Diaria'
  URL_HOMILIA:string = environment.LINK_HOMILIA || '';

  date:Date = new Date()

  url:string = this.URL_HOMILIA

   getVideoHomilia(){
    this.http.get(`https://youtube-api-x.vercel.app/youtube/homilia`).subscribe((value:any) => {
      this.url = `${this.url}${value.idVideo}`
    })
  }
}
