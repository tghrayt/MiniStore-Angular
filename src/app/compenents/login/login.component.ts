import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user : User =  {
    userName : 'youssef',
    password : '1234'
  };
  private urlWebService : string ='User/login';
  constructor(public userService: LoginService) { }

  ngOnInit(): void {
    this.login();
  }



  public login(): void {
    this.userService.login(this.urlWebService,this.user).subscribe(
      (response: any) => {
        if(response){
          console.log(response);
        } 
      }
    );
  }
}
