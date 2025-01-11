import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user_url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    // return this.httpClient.get<User[]>(this.user_url);
    return this.httpClient.get(this.user_url, { observe: 'body' }).pipe(
      map((response: any) => {
        return response.map((user: any) => {
          const { id, fName: firstName, lastName, sal, gender } = user;
          return new User(id, firstName, lastName, sal, gender);
        });
      })
    );
  }
}
