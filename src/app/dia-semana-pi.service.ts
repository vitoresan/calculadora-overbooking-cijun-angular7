import { Injectable } from '@angular/core';
import { DiaSemanaPI } from './modelos/diaSemanaPI';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DiaSemanaPIService {
  constructor(
    private http: HttpClient
  ) { }

  private diaSemanaPIUrl = 'api/dias';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  obterDiasSemanaPI(): Observable<DiaSemanaPI[]> {
    return this.http.get<DiaSemanaPI[]>(this.diaSemanaPIUrl)
      .pipe(
        tap(_ => console.log('fetched dias')),
        catchError((error) => {
          console.log(error.message)
          return new Observable<DiaSemanaPI[]>();
        })
      );
  }

  addDiaSemanaPI(diaSemanaPI: DiaSemanaPI): Observable<DiaSemanaPI> {
    return this.http.post<DiaSemanaPI>(this.diaSemanaPIUrl, diaSemanaPI, this.httpOptions).pipe(
      tap((newHero: DiaSemanaPI) => console.log(`added dia semana w/ id=${newHero.id}`)),
      catchError(this.handleError<DiaSemanaPI>('addDiaSemana'))
    );
  }

  deletarDiaSemanaPI(diaSemanaPI: DiaSemanaPI | number): Observable<DiaSemanaPI> {
    const id = typeof diaSemanaPI === 'number' ? diaSemanaPI : diaSemanaPI.id;
    const url = `${this.diaSemanaPIUrl}/${id}`;

    return this.http.delete<DiaSemanaPI>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted dia semana id=${id}`)),
      catchError(this.handleError<DiaSemanaPI>('deleteDiaSemana'))
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
