import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terco-video',
  templateUrl: './terco-video.component.html',
  styleUrls: ['./terco-video.component.scss']
})
export class TercoVideoComponent implements OnInit {
  date:Date = new Date();

  DAYS_GOZOSOS = [1,6];
  GOZOSOS_LINK = 'https://www.youtube.com/embed/EKTz4C44aEc';

  DOLOROSOS_LINK = `https://www.youtube.com/embed/0_jGY4bB0lw`
  DAY_DOLOROSOS = [2,5]

  GLORIOSOS_LINK = `https://www.youtube.com/embed/j84Cg9GYO3o`
  DAY_GLORIOSOS = [3,6]

  LUMINOSOS_LINK  = 'https://www.youtube.com/embed/lO0uMSJa8g0';
  DAY_LUMINOSOS = [4];
  titleMisterio:string = ''



  isGozosos(){
    return this.date.getDay() === this.DAYS_GOZOSOS[0] || this.date.getDay() === this.DAYS_GOZOSOS[1] ;
  }

  isLuminosos(){
    return this.date.getDay() === this.DAY_LUMINOSOS[0] ;
  }

  isGloriosos(){
    return this.date.getDay() === this.DAY_GLORIOSOS[0] || this.date.getDay() === this.DAY_GLORIOSOS[1] ;
  }

  isDolorosos(){
    return this.date.getDay() === this.DAY_DOLOROSOS[0] || this.date.getDay() === this.DAY_DOLOROSOS[1] ;
  }

  setTitleMisterios(){

    this.titleMisterio = '';

    if(this.isGozosos()){
      this.titleMisterio = `Gozosos Dias (Segunda e Sabado)`
    }

    if(this.isDolorosos()){
      this.titleMisterio = `Dolorosos Dias (Terca e Sexta)`
    }

    if(this.isGloriosos()){
      this.titleMisterio = `Gloriosos Dias (Quarta e Domingo)`
    }

    if(this.isLuminosos()){
      this.titleMisterio = `Luminosos Dias (Quinta)`
    }
  }

  ngOnInit(): void {
    this.setTitleMisterios()
    this.setLinkMisterio()
  }

  setLinkMisterio(){
    if(this.isGozosos()){
      this.url = this.GOZOSOS_LINK
    }

    if(this.isGloriosos()){
      this.url = this.GLORIOSOS_LINK
    }

    if(this.isDolorosos()){
      this.url = this.DOLOROSOS_LINK
    }

    if(this.isLuminosos()){
      this.url = this.LUMINOSOS_LINK
    }
  }

  url:string = this.GOZOSOS_LINK
  handleMisterio(misterio:string){

    switch(misterio){
      case 'dolorosos':
        this.url =  this.DOLOROSOS_LINK;
        break;
        case 'luminosos':
        this.url = this.LUMINOSOS_LINK;
        break;
        case 'gozosos':
        this.url = this.GOZOSOS_LINK;
        break;
        case 'gloriosos':
          this.url = this.GLORIOSOS_LINK;
          break;
    }

    this.titleMisterio = ''
  }

  actualMisterio(){
    this.setLinkMisterio();
    this.setTitleMisterios()
  }
}
