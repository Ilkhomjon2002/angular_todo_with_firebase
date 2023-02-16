import { Component } from '@angular/core';
import { TodoServiceService } from '../../services/todo/todo-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{
  list!:{id:number,task:String, desc?:String,completed?:boolean}[]

  constructor(private tService:TodoServiceService){
    this.list=tService.listItems
}
onDelete(id:number){
  this.tService.onDelete(id)
}
done(id:number){
  this.tService.onDone(id)
}


}
