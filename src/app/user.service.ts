import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register, Users , Username} from './model/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
user:any=""
register:any[]=[]
  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>("http://localhost:3000/user/");
  }

  registerUsers(register:Register):Observable<any>{
   return this.http.post<any>("http://localhost:3000/user/store",register);
  }

  checkUser(user:Users):Observable<any>{
    return this.http.post("http://localhost:3000/user/isExist",user);
  }

  getname(name:Username):Observable<any>{
    return this.http.post("http://localhost:3000/user/isExist",name);
  }

}
