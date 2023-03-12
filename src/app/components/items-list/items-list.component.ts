import { Component } from '@angular/core';
import { DevicesService } from "../../services/devices/devices.service";
import {ModalWindowService} from "../../services/modal-window/modal-window.service";
import {Device} from "../../types/Device";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  constructor(public devicesService: DevicesService, public modalWindowService: ModalWindowService) {}

  devices = this.devicesService.devices;

  removeDevice(index: number): void {
    this.devicesService.removeDevice(index);
  }

  toggleModalWindow(device: Device): void {
    this.modalWindowService.pushTarget(device);
    this.modalWindowService.toggleActive();
  }
}
