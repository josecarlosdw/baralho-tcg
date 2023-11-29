import { Component } from '@angular/core';

@Component({
  selector: 'app-gerenciador-baralho',
  templateUrl: './gerenciador-baralho.component.html',
  styleUrls: ['./gerenciador-baralho.component.css']
})
export class GerenciadorBaralhoComponent {

  deck: any[] = []; // Array para armazenar as cartas selecionadas

  adicionarAoBaralho(card: any) {
    // Adiciona a carta ao baralho se ela ainda não estiver presente
    if (!this.deck.includes(card)) {
      this.deck.push(card);
    }
  }

  removerDoBaralho(index: number) {
    // Remove a carta do baralho com base no índice
    this.deck.splice(index, 1);
  }

}
