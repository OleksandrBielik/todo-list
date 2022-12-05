import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Todo {
  id?: string;
  title?: string;
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
    const temp = this.todoList.filter((item) => item.id !== todo.id);
    temp.push(todo);
    this.todoList = temp;
    console.log(this.todoList);
  }
}
