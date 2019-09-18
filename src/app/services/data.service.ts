import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay, catchError } from 'rxjs/operators';
import { timeout } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { of, TimeoutError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get('/assets/data/superheroes.json')
    .pipe(
      delay(3000),
      timeout(2000),
      map(res => {
        console.log(res);
        return res;
      }),
      catchError(err => {
        if (err.name === 'TimeoutError') {
          console.log('Error de timeout', err);
        }
        return throwError;
      })
    );
  }

}
