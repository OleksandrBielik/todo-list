import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
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
    this.todoListService.addTodo({
      ...this.form.value,
      id: String(Math.random()),
    });
    console.log(this.form.get('tasks')?.get('0'));
  }

  addTask(): void {
    const control = new FormControl('', [
      Validators.maxLength(15),
      Validators.minLength(3),
      Validators.required,
    ]);
    this.tasks.push(control);
    console.log(this.tasks.length);
  }

  isValidLength(): boolean {
    return this.tasks.length < 5;
  }

  get tasks(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  getControl(control: string): FormControl {
    return this.form.get(control) as FormControl;
  }

  getFormArrayError(
    groupControl: string,
    control: string,
    error: string
  ): FormControl {
    return (
      this.form.get(groupControl)?.get(control)?.errors as ValidationErrors
    )[error];
  }

  getError(control: string, error: string): ValidationErrors {
    return (this.form.get(control)?.errors as ValidationErrors)[error];
  }

  onRemove(i: number) {
    this.tasks.removeAt(i);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.maxLength(15),
        Validators.minLength(3),
        Validators.required,
      ]),
      description: new FormControl(''),
      tasks: new FormArray([]),
    });
  }
}
