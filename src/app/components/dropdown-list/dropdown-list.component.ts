import {Component, EventEmitter, ElementRef, HostListener, Input, Output} from '@angular/core';

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

  constructor(private eRef: ElementRef) {}

  toggleActive(): void {
    this.active = !this.active;
  }

  selectOption(option: string): void {
    this.select.emit(option);
    this.selectedOption = option;
    this.active = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.active = false;
    }
  }
}
