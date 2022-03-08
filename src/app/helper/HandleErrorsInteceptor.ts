import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HandleErrorServiceService } from "../services/handle-error-service.service";



@Injectable()
export class HandleErrorsInteceptor implements HttpInterceptor {

    
    constructor(private error : HandleErrorServiceService) { }
        
    




    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        return new Observable((observer) => {

         

            next.handle(req).subscribe(

            
                (res) => {
                    
                    if(res instanceof HttpResponse){
                        observer.next(res);
                    }
                },
                (err : HttpErrorResponse)=>{
                    this.error.HandleError(err);
                }
            );
        });
        }
    

}