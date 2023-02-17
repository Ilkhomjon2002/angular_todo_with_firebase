import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TodoComponent } from './components/todo/todo.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './guard/auth.guard';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  {path:"",redirectTo:"/sign-in",pathMatch:"full"},
  {path:"sign-in", component:SignInComponent},
  {path:"register-user", component:SignUpComponent},
  {path:"dashboard", component:DashboardComponent , canActivate:[AuthGuard]},
  {path:"forgot-password", component:ForgotPasswordComponent},
  {path:"verify-email-address", component:VerifyEmailComponent},
  {path:"todo", component:TodoComponent,canActivate:[AuthGuard]},
  {path:"weather",component:WeatherComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
