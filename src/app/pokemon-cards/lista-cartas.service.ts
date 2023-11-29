import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaCartasService {

  private baseUrl = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) {}

  getCards(pageSize: number): Observable<any[]> {
    const url = `${this.baseUrl}?pageSize=${pageSize}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        console.log('Response:', response); 
        return response.data || [];
      }),
      catchError(error => {
        console.error('Error:', error); 
        return throwError('Something went wrong!');
      })
    );
  }
  
}
