import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  myForm!: FormGroup;
  
  constructor(public authService:AuthService, private fb:FormBuilder,private snackbar:MatSnackBar){
 
  }
  ngOnInit(){
    this.myForm=this.fb.group({
      userName:this.fb.control("",[Validators.required,Validators.email])
   ,password:this.fb.control("",[Validators.required,Validators.minLength(8),Validators.maxLength(8)])})

  }
  onSubmit(myForm:FormGroup){
    if(myForm.invalid){
      this.snackbar.open("Please fill form properly.","Close",{panelClass:"my-snackbar"})
    return
    }
    this.authService.SignUp(myForm.value.userName, myForm.value.password).then(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  } 
  ngAfterViewInit(){
    this.myForm.valueChanges.subscribe((val: any)=>console.log(val))

  }

}
