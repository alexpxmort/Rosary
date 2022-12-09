import { Component, OnInit } from '@angular/core';
import { TercoService } from '../terco.service';

@Component({
  selector: 'app-terco-video',
  templateUrl: './terco-video.component.html',
  styleUrls: ['./terco-video.component.scss']
})
export class TercoVideoComponent implements OnInit {
  date:Date = new Date();

  GOZOSOS_LINK = 'https://www.youtube.com/embed/EKTz4C44aEc';
  DOLOROSOS_LINK = `https://www.youtube.com/embed/0_jGY4bB0lw`
  GLORIOSOS_LINK = `https://www.youtube.com/embed/j84Cg9GYO3o`
  LUMINOSOS_LINK  = 'https://www.youtube.com/embed/lO0uMSJa8g0';

  titleMisterio:string = ''
  url:string = this.GOZOSOS_LINK

  constructor(private tercoService:TercoService){}






  setTitleMisterios(){

    this.titleMisterio = '';

    if(this.tercoService.isGozosos()){
      this.titleMisterio = `Gozosos Dias (Segunda e Sabado)`
    }

    if(this.tercoService.isDolorosos()){
      this.titleMisterio = `Dolorosos Dias (Terca e Sexta)`
    }

    if(this.tercoService.isGloriosos()){
      this.titleMisterio = `Gloriosos Dias (Quarta e Domingo)`
    }

    if(this.tercoService.isLuminosos()){
      this.titleMisterio = `Luminosos Dias (Quinta)`
    }
  }

  ngOnInit(): void {
    this.setTitleMisterios()
    this.setLinkMisterio()
  }

  setLinkMisterio(){
    if(this.tercoService.isGozosos()){
      this.url = this.GOZOSOS_LINK
    }

    if(this.tercoService.isGloriosos()){
      this.url = this.GLORIOSOS_LINK
    }

    if(this.tercoService.isDolorosos()){
      this.url = this.DOLOROSOS_LINK
    }

    if(this.tercoService.isLuminosos()){
      this.url = this.LUMINOSOS_LINK
    }
  }

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
