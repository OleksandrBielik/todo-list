import { Component, OnInit } from '@angular/core';
import { Todo, TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}
  todoList!: Todo[];

  ngOnInit(): void {
    this.todoListService.observable.subscribe((val) => (this.todoList = val));
  }

  onClick(todo: Todo) {
    this.todoListService.setCurrentTodo(todo);
  }
}
