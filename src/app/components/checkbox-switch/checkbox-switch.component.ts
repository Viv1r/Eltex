import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox-switch',
  templateUrl: './checkbox-switch.component.html',
  styleUrls: ['./checkbox-switch.component.scss']
})
export class CheckboxSwitchComponent {
  @Input() value: boolean | null = false;
  @Output() input = new EventEmitter<boolean>();

  send(event: Event): void {
    const result = event as { target: { checked?: boolean } };
    this.input.emit(result.target.checked);
  }
}
