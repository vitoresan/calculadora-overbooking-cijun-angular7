import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IdadePI } from './modelos/idadePI';

@Injectable({
  providedIn: 'root'
})

export class IdadePiService {
  constructor(
    private http: HttpClient
  ) { }

  private idadePIUrl = 'api/idades';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  obterIdadesPI(): Observable<IdadePI[]> {
    return this.http.get<IdadePI[]>(this.idadePIUrl)
      .pipe(
        tap(_ => console.log('fetched idades')),
        catchError(this.handleError<IdadePI[]>('getIdades', []))
      );
  }

  addIdadePI(idade: IdadePI): Observable<IdadePI> {
    return this.http.post<IdadePI>(this.idadePIUrl, idade, this.httpOptions).pipe(
      tap((newHero: IdadePI) => console.log(`added idade w/ id=${newHero.id}`)),
      catchError(this.handleError<IdadePI>('addIdade'))
    );
  }

  deletarIdadePI(idade: IdadePI | number): Observable<IdadePI> {
    const id = typeof idade === 'number' ? idade : idade.id;
    const url = `${this.idadePIUrl}/${id}`;

    return this.http.delete<IdadePI>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted idade id=${id}`)),
      catchError(this.handleError<IdadePI>('deleteidade'))
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
