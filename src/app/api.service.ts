import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ipUrl = 'http://ip-api.com/json/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public getIpInformation() {
    return this.httpClient.get(ipUrl);
  }
}
