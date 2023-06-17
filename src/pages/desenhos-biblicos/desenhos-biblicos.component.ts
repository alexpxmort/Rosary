import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environment';

@Component({
  selector: 'app-desenhos-biblicos',
  templateUrl: './desenhos-biblicos.html',
  styleUrls: ['./desenhos-bibicos.component.scss']
})
export class DesenhosBiblicosComponent implements OnInit,OnDestroy {
  constructor(private http:HttpClient){}
  url:string = environment.LINK_DEFAULT_YOUTUBE
  intervalId:string | number | any=''

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  ngOnInit(): void {
    this.http.get(`${environment.API_PRAYER}desenhos-biblicos`).subscribe((value:any) => {
      this.links = value.videos
      this.links = this.links.map((link) => {
       this.http.get(`${this.url}${link.idVideo}`)
        return {

            ...link,
            url:`${this.url}${link.idVideo}`

        }
      })
    })

    // Using Basic Interval
  this.intervalId = setInterval(() => { this.date = new Date(); }, 1000);
  }
  title:string = 'Desenhos Biblicos'

  date:Date = new Date()

  links:any[] = []
}
