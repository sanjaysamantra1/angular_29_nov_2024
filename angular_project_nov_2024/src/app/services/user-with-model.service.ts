import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iuser } from '../models/iuser';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})

export class UserWithModelService {

  user_url = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  // getAllUsers(): Observable<Iuser[]>{
  //   return this.httpClient.get<Iuser[]>(this.user_url);
  // }

  getAllUsers(): Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this.user_url, {observe : 'body'}).pipe(
      map((response : UserModel[]) => {
        return response.map((user : UserModel) => {
          return new UserModel(user.eId, user.firstName, user.lastName, user.gender, user.sal);
        });
      })
    );
  }
}
