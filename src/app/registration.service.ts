import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginFromRemote(user:User):Observable<any>{
    return  this._http.post<any>("localhost:8081/api/v1/user/sign in",user)
  }

}
