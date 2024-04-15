import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser, IUserResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersSericeService {

  private http = inject(HttpClient);

  private _baseUrl: string = 'https://reqres.in/api/users';

  getUserById( id: number ): Observable<IUser> {
    return this.http.get<IUserResponse>(`${this._baseUrl}/${id}`)
    .pipe(
      map( (response) => response.data )
    );
  }

}
