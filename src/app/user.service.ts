import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';




export interface User {
  _id?: string;
  username: string;
  password: string;
  ingresos: Ingreso[];
  gastos: Gasto[];
}

export interface Ingreso {
  description: string;
  amount: number;
  date: Date;
}

export interface Gasto {
  description: string;
  amount: number;
  date: Date;
}








@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/users/${userId}`).pipe(
      catchError((error) => {
        console.error('Error al eliminar usuario:', error);
        return throwError(() => new Error('No se pudo eliminar el usuario'));
      })
    );
  }
}  