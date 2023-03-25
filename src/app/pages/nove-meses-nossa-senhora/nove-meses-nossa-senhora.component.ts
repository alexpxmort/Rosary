import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.getCurrentLink().subscribe((value) => {
      this.link += value?.code;
    });
  }

  getCurrentLink(): Observable<any> {
    return this.http.get(`${environment.API_YOUTUBE}nove-meses-nossa-senhora`);
  }
}
