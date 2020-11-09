import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseApiUrl } from '../environments/environment'
import { Post } from './components/blog-create/post';

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
    return this.httpClient.post(baseApiUrl+'/admin/login', data);
  }  

  getToken() {
    return localStorage.getItem('access_token');
  }

  getPosts(): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/blog/getPosts');
  }

  getPost(id: any): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/blog/getPost/'+id);
  }

  getRecentPosts(page: any): Observable<any> {
    return this.httpClient.get(baseApiUrl+'/blog/getRecentPost/'+page);
  }

  deletePost(id: any): Observable<any> {
    return this.httpClient.delete(baseApiUrl+'/blog/deletePost/'+id);
  }

  addPost(post: Post): Observable<any> {
    return this.httpClient.post(baseApiUrl+'/blog/addPost', post);
  }

  updatePost(id:any, post: Post): Observable<any> {
    return this.httpClient.put(baseApiUrl+'/blog/updatePost/'+id, post);
  }

  sendContactMail(contact: any): Observable<any> {
    return this.httpClient.post(baseApiUrl+'/mailer/sendmail', contact);
  }

  sendctaMail(cta: any): Observable<any> {
    return this.httpClient.post(baseApiUrl+'/mailer/sendcta', cta);
  }
}
