import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorServiceService {

  constructor(private toaster : ToastrService) { }



  
  public HandleError(error: HttpErrorResponse) {
    
    let errorMessage : string;
    
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    }
    else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.toaster.error(errorMessage);
  }
}
