import {  Component,  Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent  {
  @Input() className!:string
  @Input() control!:any
  @Input() placeholder!:string
  @Input() label!:string
  @Input() inputId!:string

  errorMessage:Record<string,string>={
    email:"Email is invalid!",
    required:"This field is required",
    minlength:"Minumum length of this field is 8.",
    maxlength:"Maximum length of this field is 8."

  }
  onChange(){
    console.log(this.control)
  }
  returnError(key:any):string{
    console.log(key)
  return  this.errorMessage[key]
  }
}
