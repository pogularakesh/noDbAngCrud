import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { UserData } from '../model/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url = "http://localhost:4300/";
   url1 = "http://localhost:4300/getting";

  constructor(private httpClient:HttpClient) { }
  getData(): Observable<any> {
    return this.httpClient.get(this.url1, { responseType: 'json' })
  }

  insertData(ud: UserData): Observable<any> {
    console.log(JSON.stringify(ud));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.httpClient.post(this.url+"posting", JSON.stringify(ud), httpOptions)
  }


}
