import { Injectable } from '@angular/core';
import {Observable,of,throwError} from 'rxjs' ;
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http' ;
import {catchError,tap,map} from 'rxjs/operators'  ;
import {Cra} from './cra'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/cra';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
  
  getCras(): Observable<Cra[]> {
    return this.http.get<Cra[]>(apiUrl)
      .pipe(
        tap(cra => console.log('fetched cras')),
        catchError(this.handleError('getCras', []))
      );
  }
  
  getCra(id: number): Observable<Cra> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Cra>(url).pipe(
      tap(_ => console.log(`fetched cra id=${id}`)),
      catchError(this.handleError<Cra>(`getCra id=${id}`))
    );
  }
  
  addCra(cra: Cra): Observable<Cra> {
    return this.http.post<Cra>(apiUrl, cra, httpOptions).pipe(
      tap((art: Cra) => console.log(`added cra w/ id=${art._id}`)),
      catchError(this.handleError<Cra>('addCra'))
    );
  }
  
  updateCra(id: any, cra: Cra): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cra, httpOptions).pipe(
      tap(_ => console.log(`updated cra id=${id}`)),
      catchError(this.handleError<any>('updateCra'))
    );
  }
  
  deleteCra(id: any): Observable<Cra> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Cra>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted cra id=${id}`)),
      catchError(this.handleError<Cra>('deleteCra'))
    );
  }
  

}

