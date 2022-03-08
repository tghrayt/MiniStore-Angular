import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isExistToken :boolean = false;
 
  constructor() {
    
   }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isExistToken = true;
    }
  }

  OnLogout(){
    localStorage.removeItem('token');
    this.isExistToken = false;
  }

  

 

}
