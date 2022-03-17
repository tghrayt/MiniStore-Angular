import { Component, OnInit } from '@angular/core';


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
    location.reload();
  }

  

 

}
