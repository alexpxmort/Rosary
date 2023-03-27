import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { formatDate } from 'src/helpers/date';
import { environment } from '../../../environment';

@Component({
  selector: 'app-homilia-diaria',
  templateUrl: './homilia-diaria.component.html',
  styleUrls: ['./homilia-diaria.component.scss']
})
export class HomiliaDiariaComponent implements OnInit {

  constructor(private http:HttpClient){}

  title:string = 'Homilia Diaria'
  URL_HOMILIA:string = environment.LINK_HOMILIA || '';

  date:Date = new Date()

  url:string = this.URL_HOMILIA

  ngOnInit(): void {
    if(localStorage.getItem(`homilia-diaria_${formatDate(new Date(),'yyyy-mm-dd','-')}`)!=null){
      this.url =  this.url = `${this.url}${localStorage.getItem(`homilia-diaria_${formatDate(new Date(),'yyyy-mm-dd','-') }`)}`
    }else{
      this.getVideoHomilia()
    }

  }

   getVideoHomilia(){
    console.log(environment.API_YOUTUBE)
    this.http.get(`${environment.API_YOUTUBE}youtube/homilia`).subscribe((value:any) => {
      this.url = `${this.url}${value.idVideo}`
      localStorage.setItem(`homilia-diaria_${formatDate(new Date(),'yyyy-mm-dd','-')}`,`${value.idVideo}`)
    })
  }
}
