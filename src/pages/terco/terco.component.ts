import { Component, OnInit, Renderer2 } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPrayer, TercoService } from '../../app/terco.service';

@Component({
  templateUrl: './terco.component.html',
  styleUrls: ['./terco.component.scss']
})
export class TercoComponent implements OnInit {

  constructor(private tercoService:TercoService,private render2:Renderer2){}

  prayer$:Observable<any> =  this.tercoService.getPrayer()

  selectedPrayer = this.prayer$.pipe(map(value => value.credo))

  titlePrayer$ = this.prayer$.pipe(map(value => `Credo`))

  ngOnInit(): void {
  }

  getProperties(prayer:IPrayer){

  }


  handlePrayer(name:string,event:any){

    const MAX_PRAYERS:number = 15;
    const COLOR_SELECTED_PRAYER = 'darkblue';

    switch(name){
      case 'holy_mary':
        this.titlePrayer$ = this.prayer$.pipe(map(value => `Ave Maria`))
        break;
        case 'our_father':
          this.titlePrayer$ = this.prayer$.pipe(map(value => `Pai Nosso`))
          break;
          case 'glory':
            this.titlePrayer$ = this.prayer$.pipe(map(value => `Gloria`))
            break;
            default:
              this.titlePrayer$ = this.prayer$.pipe(map(value => `Credo`))
              break;
    }
    this.selectedPrayer = this.prayer$.pipe(map(value => value[name]))

    if(event.target.getAttribute(`class`)!='cruz'){
      this.render2.setStyle(event.target,'background-color',COLOR_SELECTED_PRAYER)
    }

    const selectedPrayersCount = Array.from(document.querySelectorAll('div')).filter((el) => el.getAttribute(`style`)?.includes(COLOR_SELECTED_PRAYER))

    if(selectedPrayersCount.length === MAX_PRAYERS){
      alert(`terco finalizado`)
    }

  }
}
