import { AfterViewInit, Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit,AfterViewInit {
  

myForm!:FormGroup



  constructor(public authService:AuthService, private fb:FormBuilder){
 
  }
  ngOnInit(){
    this.myForm=this.fb.group({
      userName:this.fb.control("", Validators.email)
   ,password:this.fb.control("")})

  }
  onSubmit(myForm:FormGroup){
    console.log(myForm)
    // this.authService.SignIn(myForm.value.userName, myForm.value.password)
  } 
  ngAfterViewInit(){
    this.myForm.valueChanges.subscribe(val=>console.log(val))

  }
}
