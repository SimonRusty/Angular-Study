import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle.trim(),
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTodoTitle = '';
    }
  }
  constructor() {}

  ngOnInit() {}
  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
