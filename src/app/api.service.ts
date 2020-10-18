import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseApiUrl } from '../environments/environment'

const ipUrl = 'https://ipapi.co/json/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public getIpInformation() {
    return this.httpClient.get(ipUrl);
  }

  login(data):Observable<any> {
    console.log("I am server", data);
    return this.httpClient.post(baseApiUrl+'/admin/login', data);
  }  

  getToken() {
    return localStorage.getItem('access_token');
  }

  getPosts(): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/blog/getPosts');
  }

  postData(data):Observable<any> {
    console.log("I am server", data);
    return this.httpClient.post(baseApiUrl+'/blog/post', data);
  } 
}
