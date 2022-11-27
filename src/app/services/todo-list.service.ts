import { Injectable } from '@angular/core';

export interface Todo {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: Todo[] = [];

  addTodo(todo: Todo): void {
    this.todoList.push(todo);
  }
}
