import { Injectable } from '@angular/core';
import { Viagem } from './modelos/viagem';

import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ViagemService {
  constructor(
    private http: HttpClient
  ) { }

  private viagemUrl = 'api/viagens';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  deletarViagem(viagem: Viagem | number): Observable<Viagem> {
    const id = typeof viagem === 'number' ? viagem : viagem.id;
    const url = `${this.viagemUrl}/${id}`;

    return this.http.delete<Viagem>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted viagem id=${id}`)),
      catchError(this.handleError<Viagem>('deleteViagem'))
    );
  }

  addViagem(viagem: Viagem): Observable<Viagem> {
    return this.http.post<Viagem>(this.viagemUrl, viagem, this.httpOptions).pipe(
      tap((novaViagem: Viagem) => console.log(`added viagem w/ id=${novaViagem.id}`)),
      catchError(this.handleError<Viagem>('addViagem'))
    );
  }

  obterViagens(): Observable<Viagem[]> {
    return this.http.get<Viagem[]>(this.viagemUrl)
      .pipe(
        tap(_ => console.log('fetched viagem')),
        catchError(this.handleError<Viagem[]>('getViagens', []))
      )
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
