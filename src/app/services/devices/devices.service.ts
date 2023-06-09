import { Injectable, OnInit } from '@angular/core';
import { Device } from 'src/app/types/Device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  public devices: Device[];

  constructor() {
    const storedDevices = localStorage.getItem('devices');
    this.devices = JSON.parse(storedDevices || '[]');
  }

  private saveDevices(): void {
    localStorage.setItem('devices', JSON.stringify(this.devices));
  }

  // Генерация id предусматривает уникальность каждого id
  private generateId(length: number): string {
    const randomInt = (max: number) => Math.floor(Math.random() * max);
    const symbols = 'qwertyuiopasdfghjklzxcvbnm1234567890';

    let newId: string;
    do {
      newId = '';
      for (let i = 0; i < length; i++) {
        newId += symbols[randomInt(symbols.length)];
      }
    } while (this.devices.some(item => item.id.value === newId));

    return newId;
  }

  public addDevice(newDevice: Device): boolean {
    newDevice.id.value = this.generateId(12);
    // Валидация обязательных полей
    if (
      Object.values(newDevice).some(field => {
        if (Array.isArray(field.value)) {
          return field.required && !field.value.length;
        }
        if (typeof field.value === 'object' && field.value !== null) {
          return field.required && Object.values(field.value).some(val => !val);
        }
        return field.required && !field.value && field.value !== false;
      })
    ) {
      return false;
    }

    this.devices.push(newDevice);
    this.saveDevices();
    return true;
  }

  public removeDevice(index: number): void {
    if (confirm(`Удалить устройство "${this.devices[index].title.value}"?`)) {
      this.devices.splice(index, 1);
      this.saveDevices();
    }
  }
}
