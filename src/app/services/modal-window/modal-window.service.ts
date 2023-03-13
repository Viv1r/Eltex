import { Injectable } from '@angular/core';
import { Device } from "../../types/Device";

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  active = false;
  target: Device = new Device();

  toggleActive(): void {
    this.active = !this.active;
  }

  makeInactive(): void {
    this.active = false;
  }

  makeActive(): void {
    this.active = true;
  }

  pushTarget(newTarget: Device): void {
    this.target = newTarget;
  }
}
