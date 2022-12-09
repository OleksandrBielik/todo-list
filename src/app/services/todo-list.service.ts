import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

export interface Todo {
  id: string;
  title: string;
  description?: string;
  tasks?: Task[];
}

export interface Task {
  id: string;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: Todo[] = [];
  observable = of(this.todoList);
  currentTodo = new Subject<Todo>();

  addTodo(todo: Todo): void {
    this.todoList.push(todo);
    console.log(todo);
  }

  setCurrentTodo(todo: Todo): void {
    this.currentTodo.next(todo);
    console.log(this.currentTodo);
  }

  editTodo(todo: Todo) {
    this.todoList.filter((item) => item.id !== todo.id).push(todo);
    console.log(this.todoList);
  }
}
