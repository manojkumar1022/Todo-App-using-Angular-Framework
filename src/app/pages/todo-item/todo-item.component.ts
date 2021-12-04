import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
// import { EventEmitter } from 'stream'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
@Input() i : number;
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    this.deleteTodo.emit(todo);
  }

  onCheckboxClick(todo){
    this.todoCheckbox.emit(todo);
  }
}
