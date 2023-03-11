import { Component } from '@angular/core';
import { DevicesService } from "../../services/devices/devices.service";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {

  constructor(private devicesService: DevicesService) {}

  get devices() {
    return this.devicesService.devices;
  }

}
