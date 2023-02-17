import { Injectable } from '@angular/core';
export interface list{
  id:number,
  task:String,
  desc?:String
  completed?:boolean
}

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {

  listItems!:list[]
  constructor() {
    this.listItems=[]
   }
  
   addItem(item:String,desc:String){
    const nextId=this.listItems.at(-1)?.id! + 1 || 0
    this.listItems.push({id:nextId,task:item,desc})
   }
   onDelete(id:number){
    this.listItems.splice(id,1)
   }
   onDone(id:number){
    this.listItems[id].completed=!this.listItems[id].completed
   }
}
