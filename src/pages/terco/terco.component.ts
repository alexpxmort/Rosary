import { Component, OnInit, Renderer2 } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPrayer, TercoService } from '../../app/terco.service';

let HABILITA_VOZ = false;

const checkBrowserCompatibility = () => {
  return "speechSynthesis" in window && HABILITA_VOZ

}



interface RecommendedVoices {
	[key: string]: boolean;
}

@Component({
  templateUrl: './terco.component.html',
  styleUrls: ['./terco.component.scss']
})
export class TercoComponent implements OnInit {
  public recommendedVoices!: RecommendedVoices;
  MAX_PRAYER:number = 18
  MAX_MISTERY:number = 5
  countPrayer:number = 0;
  arrCounters:number[] = [];
  finished:boolean = false;
  countMary:number = 0;
  glory:boolean = false;
  MAX_MARYS = 10;

  controlMistery:any;
  countMistery = 1;

  startPray:boolean = false;

  misterio$ = this.tercoService.getMisterioByOrder(this.countMistery)

  activeLeitura = ()=>{
    HABILITA_VOZ = false;

    this.buildVoices();
    this.initializeVoice();

    this.text = document.querySelector('.content p')?.textContent || ''

    setTimeout(() => this.speak(),500)
  }

  startPrayer(){
   if(! this.startPray){
    this.startPray = true;
   }else{


    this.countPrayer = this.countPrayer+1


    if(this.countPrayer === this.MAX_PRAYER ){
     if(this.countMistery >1){
      if(this.countMary ===  this.MAX_MARYS && this.glory){
        this.countMistery = this.countMistery +1
        this.misterio$ = this.tercoService.getMisterioByOrder(this.countMistery)
        this.reset()
        this.glory = false;
      }else{
        this.selectedPrayer = this.prayer$.pipe(map(value => value['glory']))
        this.glory = true;
        this.setStyleByClass('glory','background-color','darkblue')
        this.titlePrayer$ = this.prayer$.pipe(map(value => `Gloria`))
        this.countPrayer = this.countPrayer - 1;
      }
     }else{
      this.countMistery = this.countMistery +1
      this.misterio$ = this.tercoService.getMisterioByOrder(this.countMistery)
      this.reset()
     }
    }else{
      this.activePrayer(this.countPrayer);
    }
   }
  }

  activePrayer(count:number){
    let circlePray:HTMLDivElement|null =  document.querySelector(`.circle[data-sequence='${count}']`)

    if(!circlePray){
     circlePray = document.querySelector(`.circle-cross[data-sequence='${count}']`)
     this.arrCounters.push(count)
    }else{
      this.arrCounters.push(count)
    }
    circlePray?.click();
  }

  constructor(private tercoService:TercoService,private render2:Renderer2){
   if(HABILITA_VOZ){
    this.buildVoices();
   }
  }


  buildVoices(){
    this.voices = [];
		this.selectedVoice = null;
    this.rates = [ .25, .5, .75, 1, 1.25, 1.5, 1.75, 2 ];

		this.selectedRate = 0.8;
		// Dirty Dancing for the win!

		// These are "recommended" in so much as that these are the voices that I (Ben)
		// could understand most clearly.
		this.recommendedVoices = Object.create( null );
		this.recommendedVoices[ "Alex" ] = true;
		this.recommendedVoices[ "Alva" ] = true;
		this.recommendedVoices[ "Damayanti" ] = true;
		this.recommendedVoices[ "Daniel" ] = true;
		this.recommendedVoices[ "Fiona" ] = true;
		this.recommendedVoices[ "Fred" ] = true;
		this.recommendedVoices[ "Karen" ] = true;
		this.recommendedVoices[ "Mei-Jia" ] = true;
		this.recommendedVoices[ "Melina" ] = true;
		this.recommendedVoices[ "Moira" ] = true;
		this.recommendedVoices[ "Rishi" ] = true;
		this.recommendedVoices[ "Samantha" ] = true;
		this.recommendedVoices[ "Tessa" ] = true;
		this.recommendedVoices[ "Veena" ] = true;
		this.recommendedVoices[ "Victoria" ] = true;
		this.recommendedVoices[ "Yuri" ] = true;
  }
  public rates!: number[];
	public selectedRate!: number;
	public selectedVoice!: SpeechSynthesisVoice | null;
	public text: string = 'BOM DIA';
	public voices!: SpeechSynthesisVoice[];

  prayer$:Observable<any> =  this.tercoService.getPrayer()

  selectedPrayer = this.prayer$.pipe(map(value => value.credo))

  titlePrayer$ = this.prayer$.pipe(map(value => `Credo`))

  speech!:any;

	public demoSelectedVoice() : void {

		if ( ! this.selectedVoice ) {

			console.warn( "Expected a voice, but none was selected." );
			return;

		}

		var demoText = "Best wishes and warmest regards.";

		this.stop();
		this.synthesizeSpeechFromText( this.selectedVoice, this.selectedRate, demoText );

	}

	public speak() : void {

		if ( ! this.selectedVoice || ! this.text ) {

      console.log(`aqui`)
			return;

		}

		this.stop();
		this.synthesizeSpeechFromText( this.selectedVoice, this.selectedRate, this.text );

	}

  // I stop any current speech synthesis.
	public stop() : void {

		if ( speechSynthesis.speaking ) {

			speechSynthesis.cancel();

		}

	}

// I perform the low-level speech synthesis for the given voice, rate, and text.
private synthesizeSpeechFromText(
  voice: SpeechSynthesisVoice,
  rate: number,
  text: string
  ) : void {

  var utterance = new SpeechSynthesisUtterance( text );
  utterance.voice = this.selectedVoice;
  utterance.rate = rate;

  speechSynthesis.speak( utterance );

  utterance.onend = () =>console.log(`TEXTO JA FOI FALADO ${text}`)

}

	// I update the "say" command that can be used to generate the a sound file from the
	// current speech synthesis configuration.
	public updateSayCommand() : void {

		if ( ! this.selectedVoice || ! this.text ) {

			return;

		}

		// With the say command, the rate is the number of words-per-minute. As such, we
		// have to finagle the SpeechSynthesis rate into something roughly equivalent for
		// the terminal-based invocation.
		var sanitizedRate = Math.floor( 200 * this.selectedRate );
		var sanitizedText = this.text
			.replace( /[\r\n]/g, " " )
			.replace( /(["'\\\\/])/g, "\\$1" )
		;

    this.text = sanitizedText;


	}


  initializeVoice = ()=>{
    this.voices = speechSynthesis.getVoices();
		this.selectedVoice = ( this.voices[ 0 ] || null );
		this.updateSayCommand();

		// The voices aren't immediately available (or so it seems). As such, if no
		// voices came back, let's assume they haven't loaded yet and we need to wait for
		// the "voiceschanged" event to fire before we can access them.
		if ( ! this.voices.length ) {

			speechSynthesis.addEventListener(
				"voiceschanged",
				() => {

					this.voices = speechSynthesis.getVoices();
					this.selectedVoice = ( this.voices.find((voice) => voice.lang === 'pt-BR' && voice.name === 'Luciana') || null );
					this.updateSayCommand();

				}
			);

    }
  }
  ngOnInit(): void {
    if(HABILITA_VOZ){
      this.initializeVoice()
    }

  }

  getProperties(prayer:IPrayer){

  }


  setStyleMisteryItem(name:string,el?:any,color:string = 'darkblue'){

    switch(name){
      case 'holy_mary':
        this.titlePrayer$ = this.prayer$.pipe(map(value => `Ave Maria`))
        this.countMary = this.countMary + 1;
        break;
        case 'our_father':
          this.titlePrayer$ = this.prayer$.pipe(map(value => `Pai Nosso`))
          break;
          case 'glory':
            this.titlePrayer$ = this.prayer$.pipe(map(value => `Gloria`))
            break;
            case 'salve_rainha':
              this.titlePrayer$ = this.prayer$.pipe(map(value => `Salve Rainha`))
              break;
            default:
              this.titlePrayer$ = this.prayer$.pipe(map(value => `Credo`))
              break;
    }
    this.selectedPrayer = this.prayer$.pipe(map(value => value[name]))


   if(el){
    if(el.getAttribute(`class`)!='cruz'){
      this.render2.setStyle(el,'background-color',color)
    }
   }

  }

  setStyleByClass(classe:string,propStyle:string,valueStyle:string){
    Array.from(document.querySelectorAll(`.${classe} `)).forEach((el) => {
      console.log()


      if(!el.getAttribute('class')?.includes('first_mary')){
          const styles = el.getAttribute('style');
        if(styles?.includes(propStyle)){
          let _style = styles.replace(new RegExp(`${propStyle}:`,'gi'),'XX').split('XX')[0];
          _style = `${_style}${propStyle}:${valueStyle}`;
          el.setAttribute('style',`${_style}`)
        }else{
          el.setAttribute('style',`${propStyle}:${valueStyle}`)
        }
      }

    })
  }

  reset(){
    if(this.countMistery > 1 ){

      if(this.countMistery -1 === this.MAX_MISTERY){
        console.log(this.countPrayer)
        if( this.countPrayer === this.MAX_PRAYER){
          this.setStyleMisteryItem('salve_rainha')
          this.finished = true;
        }else{
          const ourFather:HTMLDivElement|null = document.querySelector('.our_father');

        this.setStyleMisteryItem('our_father',ourFather)
        }
      }else{
        const ourFather:HTMLDivElement|null = document.querySelector('.our_father');

        this.setStyleMisteryItem('our_father',ourFather)
      }

      this.countMary = 0;


    }

    this.setStyleByClass('circle','background-color','none')
    this.setStyleByClass('circle-cross','background-color','none')

    this.countPrayer = 0;
    this.arrCounters = []
  }

  getCountDivByDivStyle(style:string){
    return Array.from(document.querySelectorAll('div')).filter((el) => el.getAttribute(`style`)?.includes(style)).length || 0

  }

  async handlePrayer(name:string,event?:any){


    const COLOR_SELECTED_PRAYER = 'darkblue';

    this.setStyleMisteryItem(name,event.target)

    if(this.countMistery > 1){
     if(this.countPrayer === 1){
      this.countPrayer = 6;
      this.activePrayer(6)
     }else{
      if(this.countPrayer === 5){
        this.activePrayer(7)
      }else{
        if(this.countPrayer === this.MAX_PRAYER){
          console.log(`GLORY`)
          console.log(this.getCountDivByDivStyle(COLOR_SELECTED_PRAYER))
        }else{
          this.activePrayer(this.countPrayer)
        }
      }
     }
    }

    console.log(this.countPrayer)



    if(this.countPrayer === this.MAX_PRAYER){
      if( this.countMistery ===  this.MAX_MISTERY){
        this.setStyleMisteryItem('salve_rainha',event.target)
        this.setStyleByClass('circle','background-color','none')
        this.setStyleByClass('circle-cross','background-color','none')
      }
      this.countMistery = this.countMistery + 1
      this.misterio$ = this.tercoService.getMisterioByOrder(this.countMistery)

      this.reset()
    }
  }
}
