import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';


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
