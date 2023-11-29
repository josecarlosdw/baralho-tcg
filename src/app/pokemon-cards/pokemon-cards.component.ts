import { Component, OnInit } from '@angular/core';
import { ListaCartasService } from '../pokemon-cards/lista-cartas.service';
import { ActivatedRoute } from '@angular/router';
import { CartasSelecionadasService } from '../services/cartasselecionadas.service';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css'],
})
export class PokemonCardsComponent implements OnInit {
  cards: any[] = [];
  username: string = '';

  constructor(
    private listaCartas: ListaCartasService,
    private route: ActivatedRoute,
    private cartasSelecionadasService: CartasSelecionadasService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
     
    });

    try {
      this.getPokemonCards(); // Chame o método para obter as cartas aqui
    } catch (error) {
      console.log('Error in ngOnInit:', error);
    }

  }

  getPokemonCards() {
    const pageSize = 52;
    this.listaCartas.getCards(pageSize).subscribe((data: any[]) => {
      console.log('Resposta da API pokemon-cards:', data);
      this.cards = data || [];
      console.log('Cards:', this.cards);
    });
  }

  adicionarAoBaralho(baralho: any) {
    // Adiciona a carta ao serviço de cartas selecionadas
    this.cartasSelecionadasService.adicionarCarta(baralho);
  }
}
