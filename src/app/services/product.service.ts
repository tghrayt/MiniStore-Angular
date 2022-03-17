import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


private options: any ;

  private urlApi :string = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }






  public getProduct(urlWebService : string): Observable<Product[]> {

    this.options ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }),
      
      withCredentials: true
    };
    return this.httpClient.get<Product[]>(this.urlApi+urlWebService,this.options)
    .pipe(
      map((response: any) => {
        if(response){
          console.info('Product has been loaded');
          return response;
          
        }  })
    );
    
  }



}
