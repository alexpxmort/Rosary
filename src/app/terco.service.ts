import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of, take } from 'rxjs';


export interface IPrayer{
  credo:string;
  glory:string;
  holy_mary:string;
  our_father:string;
  salve_rainha:string;

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
    },
    {
      title:'Segundo Mistério Glorioso: Ascensão de Jesus ao Céu',
      content:`«Depois que o Senhor Jesus lhes falou, foi levado ao céu e está sentado à direita de Deus» (Mc 16, 19). `
    },
    {
      title:'Terceiro Mistério Glorioso: Vinda do Espírito Santo sobre os Apóstolos',
      content:`««Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De repente, veio do céu um ruído, como se soprasse um vento impetuoso, e encheu toda a casa onde estavam sentados. Apareceu-lhes então uma espécie de línguas de fogo que se repartiram e pousaram sobre cada um deles. Ficaram todos cheios do Espírito Santo e começaram a falar em línguas, conforme o Espírito Santo lhes concedia que falassem» (At 2, 1-4).`
    },
    {
      title:'Quarto Mistério Glorioso: Assunção de Maria',
      content:`«Por isto, desde agora, me proclamarão bem-aventurada todas as gerações, porque realizou em mim maravilhas aquele que é poderoso e cujo nome é Santo» (Lc 1, 48-49). `
    },
    {
      title:'Quinto Mistério Glorioso: Coroação de Maria no Céu',
      content:`«Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas» (Ap 12, 1).   `
    }
  ]

  LUMINOSOS_MISTERIOS = [
    {
      title:`Primeiro Mistério Luminoso: Batismo de Jesus`,
      content:``
    },
    {
      title:'Segundo Mistério Luminoso: Jesus nas Bodas de Cana',
      content:``
    },
    {
      title:'Terceiro Mistério Luminoso: Anúncio do Reino e o convite à conversão',
      content:``
    },
    {
      title:'Quarto Mistério Luminoso: Transfiguração de Cristo',
      content:``
    },
    {
      title:'Quinto Mistério Luminoso: Instituição da Eucaristia',
      content:``
    }
  ]


  GOZOSOS_MISTERIOS = [
    {
      title:`Primeiro Mistério Gozoso: Anunciação a Maria`,
      content:`«No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré,  a uma virgem desposada com um homem que se chamava José, da casa de Davi e o nome da virgem era Maria» (Lc 1, 26-27).`
    },
    {
      title:'Segundo Mistério Gozoso: Visitação de Nossa Senhora a sua prima Isabel',
      content:`«Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Ora, apenas Isabel ouviu a saudação de Maria, a criança estremeceu no seu seio; e Isabel ficou cheia do Espírito Santo. E exclamou em alta voz: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre"» (Lc 1, 39-42).`
    },
    {
      title:'Terceiro Mistério Gozoso: Nascimento de Jesus',
      content:`«Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. Este recenseamento foi feito antes do governo de Quirino, na Síria.  Todos iam alistar-se, cada um na sua cidade.
      Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi,  para se alistar com a sua esposa Maria, que estava grávida.  Estando eles ali, completaram-se os dias dela.
      E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria» (Lc 2,1-7).`
    },

    {
      title:'Quarto Mistério Gozoso: Apresentação do Menino Jesus no Templo',
      content:`«Completados que foram os oito dias para ser circuncidado o menino, foi-lhe posto o nome de Jesus, como lhe tinha chamado o anjo, antes de ser concebido no seio materno. Concluídos os dias da sua purificação segundo a Lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, conforme o que está escrito na lei do Senhor: Todo primogênito do sexo masculino será consagrado ao Senhor; e para oferecerem o sacrifício prescrito pela lei do Senhor, um par de rolas ou dois pombinhos.» (Lc 2, 21-24).`
    },
    {
      title:'Quinto Mistério Gozoso: Perda e encontro do Menino Jesus no Templo',
      content:`«Seus pais iam todos os anos a Jerusalém para a festa da Páscoa. Tendo ele atingido doze anos, subiram a Jerusalém, segundo o costume da festa. Acabados os dias da festa, quando voltavam, ficou o menino Jesus em Jerusalém, sem que os seus pais o percebessem...
      Três dias depois o acharam no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam maravilhados da sabedoria de suas respostas» (Lc 2, 41-47)`
    },
  ]


  DOLOROSOS_MISTERIOS = [
    {
      title:`Primeiro Mistério Doloroso: Agonia de Jesus no Horto`,
      content:`«Retirou-se Jesus com eles para um lugar chamado Getsêmani e disse-lhes: "Assentai-vos aqui, enquanto eu vou ali orar". E, tomando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se. Disse-lhes, então: "Minha alma está triste até a morte. Ficai aqui e vigiai comigo". Adiantou-se um pouco e, prostrando-se com a face por terra, assim rezou: "Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres"» (Mt 26, 36-39).`
    },
    {
      title:'Segundo Mistério Doloroso: Flagelação de Jesus',
      content:`«Então lhes soltou Barrabás; mas a Jesus mandou açoitar, e o entregou para ser crucificado» (Mt 27,26).`
    },
    {
      title:'Terceiro Mistério Doloroso: Coroação de Espinhos',
      content:`«Os soldados do governador conduziram Jesus para o pretório e rodearam-no com todo o pelotão. Arrancaram-lhe as vestes e colocaram-lhe um manto escarlate. Depois, trançaram uma coroa de espinhos, meteram-lha na cabeça e puseram-lhe na mão uma vara. Dobrando os joelhos diante dele, diziam com escárnio: "Salve, rei dos judeus!"» (Mt 27, 27-29).`
    },

    {
      title:'Quarto Mistério Doloroso: Jesus carregando a cruz no caminho do Calvário',
      content:`«Passava por ali certo homem de Cirene, chamado Simão, que vinha do campo, pai de Alexandre e de Rufo, e obrigaram-no a que lhe levasse a cruz. Conduziram Jesus ao lugar chamado Gólgota, que quer dizer lugar do crânio» (Mc 15, 21-22).`
    },
    {
      title:'Quinto Mistério Doloroso: Crucifixão e morte de Jesus',
      content:`«Chegados que foram ao lugar chamado Calvário, ali o crucificaram, como também os ladrões, um à direita e outro à esquerda. E Jesus dizia: "Pai, perdoa-lhes; porque não sabem o que fazem"...
      Era quase à hora sexta e em toda a terra houve trevas até a hora nona. Escureceu-se o sol e o véu do templo rasgou-se pelo meio. Jesus deu então um grande brado e disse: "Pai, nas tuas mãos entrego o meu espírito". E, dizendo isso, expirou» (Lc  23, 33-46).`
    },
  ]

  getDayMisterios(){
    if(this.isGloriosos()){
      return of(this.GLORIOSOS_MISTERIOS)
    }

    if(this.isLuminosos()){
      return of(this.LUMINOSOS_MISTERIOS)
    }

    if(this.isDolorosos()){
      return of(this.DOLOROSOS_MISTERIOS)
    }

    if(this.isGozosos()){
      return of(this.GOZOSOS_MISTERIOS)
    }

    return of([])
  }

  getMisterioByOrder(order:number){
    console.log(order)
    return this.getDayMisterios().pipe(map(misterios => misterios[order-1]));
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
Amém.`,
salve_rainha:`Salve Rainha, Mãe de Misericórdia, vida, doçura e esperança nossa, salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas.
Eia, pois, Advogada nossa, esses Vossos olhos misericordiosos a nós volvei, e, depois deste desterro, mostrai-nos a Jesus, bendito fruto de Vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria.
Rogai por nós, santa Mãe de Deus,
Para que sejamos dignos das promessas de Cristo.
Amém. `
    }


  getPrayer():Observable<IPrayer>{
    return of(this.prayer);
  }


}
