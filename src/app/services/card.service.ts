import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Card } from '../interfaces/card';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getListaCards(): Observable<Card[]> {
    const url = `${environment.homeFlixApiUrl}card/get`;
    return this.http.get<Card[]>(url);
  }


  getCards(id: number): Observable<Card> {
    const url = `${environment.homeFlixApiUrl}card/get${id}`;
    return this.http.get<Card>(url);
  }

  // addCards(card: Card): Observable<Card> {
  //   const url = `${environment.homeFlixApiUrl}card/post`;
  //   return this.http.post<Card>(url, card);
  // }

  salvar(card: Card): Observable<Card> {
    if (card.id == 0)
      return this.http.post<Card>(`${environment.homeFlixApiUrl}card/post`, card);
    else
      return this.http.put<Card>(`${environment.homeFlixApiUrl}card/put`, card)
  }

  atualizaCards(card: Card): Observable<Card> {
    const url = `${environment.homeFlixApiUrl}card/put${card.id}`;
    return this.http.put<Card>(url, card);
  }

  deletaCards(id: number): Observable<Card> {
    const url = `${environment.homeFlixApiUrl}card/delete${id}`;
    return this.http.delete<Card>(url);
  }

}
