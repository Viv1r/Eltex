import { Component } from '@angular/core';
import { DevicesService } from "../../services/devices/devices.service";
import { Device } from "../../types/Device";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {
  newDevice = new Device();

  constructor(public devicesService: DevicesService) {}

  addDevice(): void {
    console.log('!!!!!');
    if (this.devicesService.addDevice(this.newDevice)) {
      this.newDevice = new Device();
    } else {
      alert('Некоторые поля не заполнены или заполнены неверно!');
    }
  }

  deviceKey(key: string): keyof Device {
    return key as keyof Device;
  }
}
