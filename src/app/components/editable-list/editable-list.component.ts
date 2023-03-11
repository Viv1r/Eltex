import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-editable-list',
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.scss']
})
export class EditableListComponent {
  @Output() updated = new EventEmitter<string[]>();

  active: boolean = false;
  items: string[] = [];

  toggleActive(): void {
    this.active = !this.active;
  }

  addItem(value: string): void {
    if (value) {
      this.items.push(value);
      this.updated.emit(this.items);
    }
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
    this.updated.emit(this.items);
  }
}
