import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) { }

  /* getCards(pageSize: number): Observable<any[]> {
    const url = `${this.baseUrl}?pageSize=${pageSize}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => response.data || [])
    );
  } */
}
