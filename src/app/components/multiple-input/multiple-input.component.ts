import { Component, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { Device, Settings } from "../../types/Device";
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

  constructor(private eRef: ElementRef) {}

  ngOnInit(): void {
    this.keys = Object.keys(this.target);
  }

  updateValue(key: string, newValue: any): void {
    this.target.setValue(key, newValue);
  }

  toggleActive(): void {
    this.active = !this.active;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.active = false;
    }
  }
}
