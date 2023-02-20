import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedInVal!:boolean
  constructor(
    public authService:AuthService,
    public router: Router,
    private snackbar:MatSnackBar
  ){}
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.isLoggedIn.subscribe(val=>{
        this.isLoggedInVal=val
      })
     if(this.isLoggedInVal !==true){
      this.router.navigate(["sign-in"])
      this.snackbar.open("Please Login first!","Close", {panelClass:"my-snackbar"})
     }
     
      return true;
  }
  
}
