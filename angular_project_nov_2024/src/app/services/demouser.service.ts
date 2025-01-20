import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class DemouserService {
  user_url='http://localhost:3000/interns'
  constructor(private  httpClient:HttpClient) { }

  getAllUsers():Observable<Iuser[]>{
    return this.httpClient.get<Iuser[]>(this.user_url);
  }
}
