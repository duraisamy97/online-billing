import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {  }

  apipost(url:any,content:any){
    url="http://localhost:8081"+url;
    return this.http.post(url,content);
  }
}
