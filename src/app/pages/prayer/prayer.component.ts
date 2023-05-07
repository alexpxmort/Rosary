import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';


@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.scss'],
})
export class PrayerComponent {

  constructor(private http:HttpClient){}

  date:Date = new Date()

url:string = environment.LINK_PRAYER


chooseNewPrayer(){
  this.http.get(`${environment.API_YOUTUBE}youtube/findPrayer`).subscribe((value:any) => {
    this.url = `${environment.LINK_DEFAULT_YOUTUBE}${value.idVideo}`
  })
}



}
