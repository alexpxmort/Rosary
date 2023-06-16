import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { formatDate } from 'src/helpers/date';
import { environment } from '../../../environment';

@Component({
  selector: 'app-nove-meses-nossa-senhora',
  templateUrl: './nove-meses-nossa-senhora.component.html',
  styleUrls: ['./nove-meses-nossa-senhora.component.scss']
})
export class NoveMesesNossaSenhoraComponent implements OnInit {
  date = new Date();
  link = environment.LINK_DEFAULT_YOUTUBE;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    if(localStorage.getItem(`nove-meses-nossa-senhora_${formatDate(new Date(),'yyyy-mm-dd','-')}`)!=null){
      this.link = `${this.link}${localStorage.getItem(`nove-meses-nossa-senhora_${formatDate(new Date(),'yyyy-mm-dd','-') }`)}`
    }else{
      this.getCurrentLink().subscribe((value) => {
        this.link += value?.code;
        localStorage.setItem(`nove-meses-nossa-senhora_${formatDate(new Date(),'yyyy-mm-dd','-')}`,`${value?.code}`)
      });
    }

  }

  getCurrentLink(): Observable<any> {
    return this.http.get(`${environment.API_PRAYER}nove-meses-nossa-senhora`);
  }
}
