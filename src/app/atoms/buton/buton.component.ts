import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buton',
  templateUrl: './buton.component.html',
  styleUrls: ['./buton.component.scss']
})
export class ButonComponent {
  @Input() type!:string
  

}
