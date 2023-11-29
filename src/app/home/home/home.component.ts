import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartasSelecionadasService } from 'src/app/services/cartasselecionadas.service';
import { Subscription } from 'rxjs';
import { DadosCompartilhadosService } from 'src/app/services/dados-compartilhados.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartasSelecionadas: any[] = [];
  username: string = '';
  private cartasSubscription: Subscription = new Subscription;

  constructor(
    private router: Router,
    private cartasSelecionadasService: CartasSelecionadasService,
    private dadosCompartilhadosService: DadosCompartilhadosService,
    private cdr: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
      // Obtém as cartas selecionadas do serviço
      this.cartasSelecionadas = this.cartasSelecionadasService.obterCartasSelecionadas();

      // Inscreve-se para receber atualizações das cartas selecionadas
      this.cartasSelecionadasService.cartasSelecionadasAtualizadas()
      .subscribe(cartas => {
        this.cartasSelecionadas = cartas;
        this.cdr.detectChanges();
      });

      this.dadosCompartilhadosService.currentUsername.subscribe((username) => {
        this.username = username;
      });
    }

    ngOnDestroy() {
      this.cartasSubscription.unsubscribe(); 
    }
  
    onSubmit() {
    // Redirecionar para a rota 'pokemon-cards' com o nome fornecido
    this.dadosCompartilhadosService.changeUsername(this.username);

    this.router.navigate(['/pokemon-cards'], { queryParams: { username: this.username } });
    }

    removerDoBaralho(baralho: any) {
      this.cartasSelecionadasService.removerCarta(baralho);
    }
}
