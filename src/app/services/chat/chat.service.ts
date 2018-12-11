import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = "8e82d01f3ff545e9aa0c7d8b9f878afb";

  constructor(private http: Http){}

  public getResponse(query: string){
    let data = {
      query : query,
      lang: 'en',
      sessionId: '1234567'
    }
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);

    return this.http
      .post(`${this.baseURL}`, data, {headers: headers})
      .map(res => {
        return res.json()
      })
  }

}
