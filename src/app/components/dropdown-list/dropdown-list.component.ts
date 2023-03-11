import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent {
  @Input() placeholder = 'Выберите вариант';
  @Input() options?: string[];
  @Output() select = new EventEmitter<string>();

  active: boolean = false;
  selectedOption?: string;

  toggleActive(): void {
    this.active = !this.active;
  }

  selectOption(option: string): void {
    this.select.emit(option);
    this.selectedOption = option;
    this.active = false;
  }
}
