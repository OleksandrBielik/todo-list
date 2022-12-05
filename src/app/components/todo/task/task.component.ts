import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() taskChange = new EventEmitter<Task>();
  status = false;

  editTask(status: boolean) {
    this.task.done = status;
    this.taskChange.emit(this.task);
  }

  ngOnInit(): void {
    this.status = this.task.done;
  }
}
