import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register, Users , Username, Books} from '../model/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
selectedBooks:Books;
book:Books[];
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

  savebooks(books:Books):Observable<any>{
    return this.http.post("http://localhost:3000/books/store",books);
  }

  showall():Observable<any>{
    return this.http.get("http://localhost:3000/books/");
  }

  sendimage(image:any):Observable<any>{
    const formData = new FormData();
    formData.append('file', image , image.name)
    return this.http.post("http://localhost:4200/assets/books",formData)
  }
  removedata(id:string){
    return this.http.delete("http://localhost:3000/books/delete/"+id)
  }
}
