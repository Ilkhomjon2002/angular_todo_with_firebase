import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn!:boolean
  constructor(public AuthService:AuthService){
  this.AuthService.isLoggedIn.subscribe(val=>
    this.isLoggedIn=val)
  }
 ngOnInit(): void {
  
 }
 
 


}
