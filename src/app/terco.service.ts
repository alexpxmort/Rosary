import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of, take } from 'rxjs';


export interface IPrayer{
  credo:string;
  glory:string;
  holy_mary:string;
  our_father:string;

}

@Injectable({
  providedIn: 'root'
})
export class TercoService {

  constructor() { }

  GLORIOSOS_MISTERIOS = [
    {
      title:`Primeiro Mistério Glorioso: Ressurreição de Jesus`,
      content:`No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro com os aromas que haviam preparado. Acharam a pedra removida longe da abertura do sepulcro. Entraram, mas não encontraram o corpo do Senhor Jesus. Não sabiam elas o que pensar, quando apareceram em frente delas dois personagens com vestes resplandecentes. Como estivessem amedrontadas e voltassem o rosto para o chão, disseram-lhes eles: "Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou"» (Lc 24, 1-6). `
    }
  ]

  getDayMisterios(){
    if(this.isGloriosos()){
      return of(this.GLORIOSOS_MISTERIOS)
    }

    return of([])
  }

  getMisterioByOrder(order:number){
    return this.getDayMisterios().pipe(take(order)).pipe(map(misterios => misterios[0]));
  }


  DAYS_GOZOSOS = [1,6];

  DAY_DOLOROSOS = [2,5]

  DAY_GLORIOSOS = [3,6]

  DAY_LUMINOSOS = [4];

  date:Date = new Date();


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


  private prayer:IPrayer =
    {
      credo:`
      Creio em Deus Pai todo-poderoso,
 criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso senhor;
  que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna.
Amém.
      `,
      glory:`Glória ao Pai e ao Filho e ao Espírito Santo. Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos.
      Amém.`,
      our_father:`
      Pai Nosso que estais no Céu, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a tua vontade, assim na terra como no Céu; o pão nosso de cada dia dai-nos hoje; perdoai as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal.
Amém.`,
holy_mary:`Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto de vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte.
Amém.`
    }


  getPrayer():Observable<IPrayer>{
    return of(this.prayer);
  }


}
