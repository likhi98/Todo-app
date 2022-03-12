import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  //id = 0;
  //content = 'my first todo';
  inputTodo: string = '';

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        content: 'Brush your teeth',
        completed: false,
      },
      {
        content: 'Study',
        completed: true,
      },
      {
        content: 'Sleep',
        completed: false,
      },
    ];
  }
  isTaskcomplete(id: number) {
    this.todos.map((v, i) => {
      if (id == i) v.completed = !v.completed;
      return v;
    });
  }
  Delete(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
