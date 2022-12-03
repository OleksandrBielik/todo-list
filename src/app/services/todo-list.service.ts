import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Todo {
  id: string;
  title: string;
  description: string;
  tasks: Task[];
}

export interface Task {
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: Todo[] = [];
  currentTodo = new Subject<Todo>();

  addTodo(todo: Todo): void {
    this.todoList.push(todo);
  }

  setCurrentTodo(todo: Todo): void {
    this.currentTodo.next(todo);
    console.log(this.currentTodo);
  }
}
