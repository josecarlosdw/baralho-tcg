import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerenciaBaralhoService {

  constructor() { }

  deck: any[] = [];

  adicionarAoBaralho(card: any) {
    // Adiciona a carta ao baralho se ela ainda não estiver presente
    if (!this.deck.includes(card)) {
      this.deck.push(card);
    }
  }

  removerDoBaralho(card: any) {
    console.log('Carta recebida para remoção:', card);
    const index = this.deck.indexOf(card);
    if (index !== -1) {
      this.deck.splice(index, 1);
    }
  }

  obterBaralho(): any[] {
    return this.deck;
  }

}
