import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { InputComponent } from 'src/app/atoms/input/input.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userName="UserName"




  constructor(public authService:AuthService){

  }
  ngOnInit(){}
}
