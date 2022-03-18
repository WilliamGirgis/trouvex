import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http:HttpClient) { }


loginClient(id:string,password:string):Observable<any> {
  return this.http.post('http://localhost:4200/user/users/login', {
    id,
    password
  },{
    observe:'response'
  })
}

}
