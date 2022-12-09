import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  Task,
  Todo,
  TodoListService,
} from 'src/app/services/todo-list.service';

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

  editTodo(task: Task): void {
    if (!this.currentTodo) {
      return;
    }
    if (!this.currentTodo.tasks) {
      return;
    }
    const tasks = this.currentTodo.tasks.filter((item) => item.id !== task.id);
    tasks.push(task);
    this.todoListService.editTodo({ ...this.currentTodo, tasks });
  }
  ngOnInit(): void {
    this.todoListService.currentTodo.subscribe((value?: Todo) => {
      this.currentTodo = value;
      this.cd.markForCheck();
    });
  }
}
