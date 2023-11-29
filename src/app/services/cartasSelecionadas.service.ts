import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CartasSelecionadasService {

  private cartasSelecionadas: any[] = [];
  private cartasSelecionadasSubject = new Subject<any[]>();

  cartasSelecionadas$ = this.cartasSelecionadasSubject.asObservable();

   private generateUniqueId(): string {
    return uuidv4();
  }

  // Gere um ID único para cada carta e adicione a carta no serviço
  adicionarCarta(carta: any) {
    carta.id = this.generateUniqueId(); 
    this.cartasSelecionadas.push(carta);
    this.cartasSelecionadasSubject.next([...this.cartasSelecionadas]);
  }

  // Remova a carta do array pelo ID
  removerCarta(carta: any) {
    const index = this.cartasSelecionadas.findIndex(c => c.id === carta.id);
    if (index !== -1) {
      this.cartasSelecionadas.splice(index, 1);
      this.cartasSelecionadasSubject.next([...this.cartasSelecionadas]);
    }
  }

  obterCartasSelecionadas() {
    return this.cartasSelecionadas.slice(); // Retorna uma cópia das cartas selecionadas
  }

  cartasSelecionadasAtualizadas(): Observable<any[]> {
    return this.cartasSelecionadasSubject.asObservable();
  }

  limparCartasSelecionadas() {
    this.cartasSelecionadas = [];
  }

}
