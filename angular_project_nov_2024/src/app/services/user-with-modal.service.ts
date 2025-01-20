import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iuser } from '../models/iuser';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserWithModalService {

  constructor(private httpClient: HttpClient) { }

  user_url = 'http://localhost:3000/employees';

  getAllUsers(): Observable<UserModel[]> {
    // return this.httpClient.get<Iuser[]>(this.user_url); // when using interface

    return this.httpClient.get<UserModel[]>(this.user_url, { observe: 'body' }).pipe(
      map((response: UserModel[]) => {
        return response.map((user: UserModel) => {
          return new UserModel(user.id, user.firstName, user.lastName, user.sal, user.gender)
        })
      })
    )
  }
}
