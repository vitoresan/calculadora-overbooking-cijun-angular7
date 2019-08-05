import { Injectable } from '@angular/core';
import { RotaPI } from './modelos/rotaPI';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RotaPIService {
  constructor(
    private http: HttpClient
  ) { }

  private rotaPIUrl = 'api/rotas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  obterRotasPI(): Observable<RotaPI[]> {
    return this.http.get<RotaPI[]>(this.rotaPIUrl)
      .pipe(
        tap(_ => console.log('fetched rotas')),
        catchError(this.handleError<RotaPI[]>('getRotas', []))
      );
  }

  addRotaPI(rotaPI: RotaPI): Observable<RotaPI> {
    return this.http.post<RotaPI>(this.rotaPIUrl, rotaPI, this.httpOptions).pipe(
      tap((novaRota: RotaPI) => console.log(`added rota w/ id=${novaRota.id}`)),
      catchError(this.handleError<RotaPI>('addRota'))
    );
  }

  deletarRotaPI(rotaPI: RotaPI | number): Observable<RotaPI> {
    const id = typeof rotaPI === 'number' ? rotaPI : rotaPI.id;
    const url = `${this.rotaPIUrl}/${id}`;

    return this.http.delete<RotaPI>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted rota id=${id}`)),
      catchError(this.handleError<RotaPI>('deleteRota'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
