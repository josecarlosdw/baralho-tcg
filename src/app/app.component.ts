import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerenciaBaralhoService } from './gerenciador-baralho/gerencia-baralho.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cards: any[] = [];
  baralho: any[] = [];
  username: string = '';

  constructor(
    private gerenciaBaralho: GerenciaBaralhoService,
    private router: Router
    ) {}

    ngOnInit() {
      this.baralho = this.gerenciaBaralho.obterBaralho() || [];
    }
    onSubmit() {
      console.log('Username:', this.username);
      console.log('Cards:', this.cards);
    // Redirecionar para a rota 'pokemon-cards' com o nome fornecido
    this.router.navigate(['/pokemon-cards'], { queryParams: { username: this.username } });
    }

}
