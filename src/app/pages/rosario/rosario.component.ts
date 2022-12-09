import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rosario',
  templateUrl: './rosario.component.html',
  styleUrls: ['./rosario.component.scss']
})
export class RosarioComponent implements OnInit {
  ngOnInit(): void {
  }

  ROSARIO_LINK = 'https://www.youtube.com/embed/rI5aj8_S_ak';
  url:string = this.ROSARIO_LINK

  date:Date = new Date();

}
