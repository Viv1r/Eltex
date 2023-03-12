import {Component, ElementRef, HostListener, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-editable-list',
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.scss']
})
export class EditableListComponent {
  @Input() model: string[] = [];

  active: boolean = false;

  constructor(private eRef: ElementRef) {}

  toggleActive(): void {
    this.active = !this.active;
  }

  addItem(value: string): void {
    if (value) {
      this.model.push(value);
    }
  }

  deleteItem(index: number): void {
    this.model.splice(index, 1);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.active = false;
    }
  }
}
