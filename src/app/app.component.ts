import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 constructor(public AuthService:AuthService){}
 ngOnInit(): void {
     
 }
 

}
