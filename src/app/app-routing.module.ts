import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './compenents/admin/admin.component';
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';
import { AdminGuard } from './helper/admin.guard';
import { LayoutComponent } from './shared/layout/layout.component';

const appRoutes: Routes = [
  { path: 'home', 
    component: LayoutComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'register',
    component: RegisterComponent
  },
  { path: 'admin',
    component: AdminComponent,
    canActivate:[AdminGuard]
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: "full" 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
