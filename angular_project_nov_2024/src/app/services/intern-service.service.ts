import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternServiceService {

  constructor(private httpClient:HttpClient) { }

 interns_url = "http://localhost:3000/interns/";
  getInterns(){
    return this.httpClient.get(this.interns_url);
  }
  addIntern(internObj:any){
    console.log(internObj);
    return this.httpClient.post(this.interns_url, internObj);
  }
   deleteIntern(id:any){
    console.log(id);
     return this.httpClient.delete(this.interns_url+id);
   }
  updateIntern(internId:number,updateIntern:any){
    let update_url=this.interns_url+"/"+internId;
    return this.httpClient.put(update_url,updateIntern);
  }
  
}
