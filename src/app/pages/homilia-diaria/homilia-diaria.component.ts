import { HttpClient } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { formatDate } from 'src/helpers/date';
import { environment } from '../../../environment';

@Component({
  selector: 'app-homilia-diaria',
  templateUrl: './homilia-diaria.component.html',
  styleUrls: ['./homilia-diaria.component.scss']
})
export class HomiliaDiariaComponent implements OnInit,OnDestroy {

  constructor(private http:HttpClient){}

  title:string = 'Homilia Diaria'
  URL_HOMILIA:string = environment.LINK_HOMILIA || '';

  date:Date = new Date()
  intervalId:string | number | any=''

  url:string = this.URL_HOMILIA

  ngOnInit(): void {
    if(localStorage.getItem(`homilia-diaria_${formatDate(new Date(),'yyyy-mm-dd','-')}`)!=null){
      this.url =  this.url = `${this.url}${localStorage.getItem(`homilia-diaria_${formatDate(new Date(),'yyyy-mm-dd','-') }`)}`
    }else{
      this.getVideoHomilia()
    }

    // Using Basic Interval
  this.intervalId = setInterval(() => { this.date = new Date(); }, 1000);

  }

   getVideoHomilia(){
    this.http.get(`${environment.API_PRAYER}homilia-diaria`).subscribe((value:any) => {
      this.url = `${this.url}${value.idVideo}`
      localStorage.setItem(`homilia-diaria_${formatDate(new Date(),'yyyy-mm-dd','-')}`,`${value.idVideo}`)
    })
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);

  }

}
