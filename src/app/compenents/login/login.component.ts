import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  private urlWebService : string ='User/login';
  private user : User = new User();
  userName = new FormControl();
  password = new FormControl();
  constructor(public userService: LoginService,public router: Router) { }

  ngOnInit(): void {
  }

  public Onlogin(){
    this.user.userName = this.userName.value;
    this.user.password = this.password.value;
    this.userService.login(this.urlWebService,this.user).subscribe(
      
      (response) => {
        debugger;
        if(response){
          this.router.navigate(['']);
        } 
        else{
          this.userName.setValue('');
          this.password.setValue('');
        }
      },
      (error : HttpErrorResponse ) => {
        
      }
      
    );
    this.userName.setValue('');
    this.password.setValue('');
  }

 
}
