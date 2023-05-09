import { HttpClient } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { environment } from 'src/environment';


@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.scss'],
})
export class PrayerComponent implements OnInit,OnDestroy {

  constructor(private http:HttpClient){}

  date:Date = new Date()
intervalId:string | number | any=''

url:string = environment.LINK_PRAYER


chooseNewPrayer(){
  this.http.get(`${environment.API_YOUTUBE}youtube/findPrayer`).subscribe((value:any) => {
    this.url = `${environment.LINK_DEFAULT_YOUTUBE}${value.idVideo}`
  })
}
ngOnInit(){
// Using Basic Interval
this.intervalId = setInterval(() => { this.date = new Date(); }, 1000);
}



ngOnDestroy() {
clearInterval(this.intervalId); 

}


}
