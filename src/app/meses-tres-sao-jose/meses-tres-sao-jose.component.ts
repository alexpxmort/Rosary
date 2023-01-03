import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-meses-tres-sao-jose',
  templateUrl: './meses-tres-sao-jose.component.html',
  styleUrls: ['./meses-tres-sao-jose.component.scss']
})
export class MesesTresSaoJoseComponent implements OnInit {
  ngOnInit(): void {
    this.getCurrentLink()
  }
  date:Date = new Date();
  link:string = environment.LINK_3_MESES_SAO_JOSE


  arrDays = [
    {
      day:20,
      month:12,
      number:1,
      code:'JSVpgMO2Aik'
    },
    {
      day:21,
      month:12,
      number:2,
      code:'d6dhed4xqa0'
    },
    {
      day:22,
      month:12,
      number:3,
      code:'Zqc0kgy2NrE'
    },
    {
      day:23,
      month:12,
      number:4,
      code:'HL9UqA3rY3w'
    },
    {
      day:24,
      month:12,
      number:5,
      code:'t8VJLDV_OEM'
    },
    {
      day:25,
      month:12,
      number:6,
      code:'Byw-K4T3MJ8'
    },
    {
      day:26,
      month:12,
      number:7,
      code:'_K5fz0X2cx0'
    },
    {
      day:27,
      month:12,
      number:8,
      code:'tyzBW9PVYAM'
    },
    {
      day:28,
      month:12,
      number:9,
      code:'xMrBzvTUl94'
    },
    {
      day:29,
      month:12,
      number:10,
      code:'fpqZN2m-AJQ'
    },
    {
      day:30,
      month:12,
      number:12,
      code:'yIW60bxMxco'
    },
    {
      day:31,
      month:12,
      number:13,
      code:'qAik4xChZyE'
    },
    {
      day:1,
      month:1,
      number:14,
      code:'Qairi87hm28'
    },
    {
      day:2,
      month:1,
      number:15,
      code:'wlGeRgRXdcg'
    },
    {
      day:3,
      month:1,
      number:16,
      code:'90Q_okTEuCs'
    },
    {
      day:4,
      month:1,
      number:17,
      code:'YMOH9PZBDi4'
    },
    {
      day:5,
      month:1,
      number:18,
      code:'AOonTK5G1FM'
    },
    {
      day:6,
      month:1,
      number:19,
      code:'XlZm8RhSj_c'
    },
    {
      day:7,
      month:1,
      number:20,
      code:'PNS09khtcyA'
    }, {
      day:8,
      month:1,
      number:21,
      code:'p_we44Q88EY'
    }, {
      day:9,
      month:1,
      number:22,
      code:'KXCffki8ZvY'
    },
    {
      day:10,
      month:1,
      number:23,
      code:'s0gDgEbJNKE'
    },
    {
      day:11,
      month:1,
      number:24,
      code:'nA_xIhGncTk'
    },
    {
      day:12,
      month:1,
      number:25,
      code:'kp8Qp171HG8'
    },
    {
      day:13,
      month:1,
      number:26,
      code:'2Pb_NSYzK_4'
    },
    {
      day:14,
      month:1,
      number:27,
      code:'p_RAHg_bJkw'
    },
    {
      day:15,
      month:1,
      number:28,
      code:'H11vZO4olws'
    },
    {
      day:16,
      month:1,
      number:29,
      code:'72qOj5fUh4c'
    },
    {
      day:17,
      month:1,
      number:30,
      code:'rhy95gEvIsA'
    }
  ]



  getCurrentLink(){
    const currentDate = new Date();


    const day = this.arrDays.find((val) => val.day === currentDate.getDate() && val.month === currentDate.getMonth()+1)


    if(day){
      this.link = `${this.link}${day.code}`
    }
  }
}
