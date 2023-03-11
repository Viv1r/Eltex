import { Pipe, PipeTransform } from '@angular/core';
import { Device } from "../../types/Device";

@Pipe({
  name: 'deviceKey'
})
export class DeviceKeyPipe implements PipeTransform {

  transform(value: string): keyof Device {
    return value as keyof Device;
  }

}
