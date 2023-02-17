import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  

myForm!:FormGroup



  constructor(public authService:AuthService){

  }
  ngOnInit(){
    this.myForm=new FormGroup({userName:new FormControl(
    ),password:new FormControl()})

  }
  onSubmit(myForm:FormGroup){
    console.log(myForm)
    // this.authService.SignIn(myForm.value.userName, myForm.value.password)

  }
}
