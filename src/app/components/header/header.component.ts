import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() modal!: boolean;
  @Output() modalChange = new EventEmitter<boolean>();

  showModal(): void {
    this.modal = !this.modal;
    this.modalChange.emit(this.modal);
  }
}
