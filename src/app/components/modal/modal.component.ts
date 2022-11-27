import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}
  form!: FormGroup;

  @Input() modal!: boolean;
  @Output() modalChange = new EventEmitter<boolean>();

  onClose() {
    this.modal = false;
    this.modalChange.emit(this.modal);
  }

  onSubmit() {
    this.todoListService.addTodo(this.form.value);
    console.log(this.todoListService.todoList);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    });
  }
}
