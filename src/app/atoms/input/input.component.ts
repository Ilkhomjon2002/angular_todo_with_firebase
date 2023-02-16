import { AfterViewInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit{
  @Input() userName!:any

  ngAfterViewInit(): void {
    console.log(this.userName)
      
  }



}
