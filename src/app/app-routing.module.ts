import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';

const appRoutes: Routes = [
  { path: 'home', 
    component: AppComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
