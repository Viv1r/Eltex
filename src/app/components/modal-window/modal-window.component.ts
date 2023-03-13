import { Component, OnInit } from '@angular/core';
import { ModalWindowService } from "../../services/modal-window/modal-window.service";
import { Device } from "../../types/Device";
import {DevicesService} from "../../services/devices/devices.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  constructor(public modalWindowService: ModalWindowService, public devicesService: DevicesService) {}

  target: Device = new Device();

  ngOnInit() {
    this.target = this.modalWindowService.target;
  }

  disableModal(): void {
    this.modalWindowService.makeInactive();
  }

  getValue(target: Device, key: string) {
    return Device.getValue(target, key);
  }

  removeTarget(): void {
    this.devicesService.removeDevice(
      this.devicesService.devices
        .findIndex(elem => elem.id === this.target.id)
    );
    this.target = new Device();
    this.disableModal();
  }

  isObject(target: any): boolean {
    return typeof target === 'object' && !Array.isArray(target);
  }
}
