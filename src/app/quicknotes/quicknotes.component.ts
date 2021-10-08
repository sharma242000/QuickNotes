import { Component, OnInit } from '@angular/core';
export class Quicknotes {
  title: String;
  content: String;
  todo:String;
}
@Component({
  selector: 'app-quicknotes',
  templateUrl: './quicknotes.component.html',
  styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent implements OnInit {
  titleModel:String;
  contentModel: String;
  todoModel:String;
  quicknotes : Quicknotes[];

  constructor() {
    this.titleModel = '';
    this.contentModel = '';
    this.todoModel = '';
    const defaultQuicknotes: Quicknotes = {
      title: 'MY NOTE',
      content: 'This is default note',
      todo: ' This is the default time you want to your task done'
    };
 
    this.quicknotes = [defaultQuicknotes];
    
   }
   

  ngOnInit(): void {
  }
createQuicknotes(){
 const newQuicknotes:Quicknotes = {

  title : this.titleModel,
  content:this.contentModel,
  todo:this.todoModel
 };

 this.quicknotes.push(newQuicknotes);
 this.titleModel = this.todoModel = this.contentModel = '';

}
}
