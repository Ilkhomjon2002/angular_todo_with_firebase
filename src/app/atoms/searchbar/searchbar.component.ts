import { Component } from '@angular/core';
import { TodoServiceService } from '../../services/todo/todo-service.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  newTask!:String
  desc!:String
  constructor(private service:TodoServiceService){}

  onAdd(){
  this.service.addItem(this.newTask,this.desc)
  }

}
