import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getListaCards(): Observable<Card[]> {
    const url = `${environment.homeFlixApiUrl}/card`;
    return this.http.get<Card[]>(url);
  }


  getCards(id: number): Observable<Card> {
    const url = `${environment.homeFlixApiUrl}/card/${id}`;
    return this.http.get<Card>(url);
  }

  addCards(card: Card): Observable<Card> {
    const url = `${environment.homeFlixApiUrl}/card/`;
    return this.http.post<Card>(url, card);
  }

  atualizaCards(card: Card): Observable<Card> {
    const url = `${environment.homeFlixApiUrl}/card/${card.id}`;
    return this.http.put<Card>(url, card);
  }

  deletaCards(id: number): Observable<Card> {
    const url = `${environment.homeFlixApiUrl}/card/${id}`;
    return this.http.delete<Card>(url);
  }

}
