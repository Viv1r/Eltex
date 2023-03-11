import { Component, Input, OnInit } from '@angular/core';
import { Settings } from "../../types/Device";
import MultipleInput from "../../types/MultipleInput";

@Component({
  selector: 'app-multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.scss']
})
export class MultipleInputComponent implements OnInit {
  @Input() target: MultipleInput = new Settings();

  active: boolean = false;
  keys: string[] = [];

  ngOnInit(): void {
    this.keys = Object.keys(this.target);
  }

  updateValue(key: string, newValue: any): void {
    this.target.setValue(key, newValue);
  }

  toggleActive(): void {
    this.active = !this.active;
  }
}
