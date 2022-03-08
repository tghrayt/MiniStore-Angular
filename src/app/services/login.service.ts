import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private urlApi :string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {

   }




   public login(urlWebService : string,user : User): Observable<string> {
   
    return this.httpClient.post<string>(this.urlApi+urlWebService,user)
    .pipe(
      map((response: any) => {
        if(response){
          localStorage.setItem('token', response.token);
          return response;
          
        }  })
    );
    
  }
}
 