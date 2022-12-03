import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Todo, TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(
    public todoListService: TodoListService,
    private cd: ChangeDetectorRef
  ) {}
  currentTodo?: Todo;
  ngOnInit(): void {
    this.todoListService.currentTodo.subscribe((value?: Todo) => {
      this.currentTodo = value;
      this.cd.markForCheck();
      console.log(this.currentTodo);
    });
  }
}
