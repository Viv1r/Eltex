import MultipleInput from "./MultipleInput";

const deviceTypeOptions = ['ELTEX_MQTT_DEVICE', 'ELTEX_MOTION', 'ELTEX_SOCKET', 'ELTEX_SZ_AIR', 'ELTEX_DIMMER'] as const;
const statusOptions = ['ONLINE', 'OFFLINE', 'UNAVAILABLE', 'INITIALIZING', 'UNKNOWN'] as const;

type DeviceType = typeof deviceTypeOptions[number];
type Status = typeof statusOptions[number];


export class Settings implements MultipleInput {
  port = '';
  name = '';
  password = '';

  getValue(key: string): any {
    const targetKey = key as keyof Settings;
    return this[targetKey];
  }

  setValue(key: string, newValue: any): void {
    const targetKey = key as keyof Settings;
    this[targetKey] = newValue;
  }
}

export class Field<Type> {
  value: Type | null = null;
  readonly required: boolean = true;
  readonly options?: string[];

  constructor(val: Type | null, options?: string[]) {
    this.value = val;
    this.options = options;
  }

  pushValue(value: string): void {
    if (this.options?.includes(value)) {
      this.value = value as unknown as Type;
    }
  }
}

export class Device {
  id = new Field<string>('');
  title = new Field<string>('');
  deviceType = new Field<DeviceType>(null, [...deviceTypeOptions]);
  enabled = new Field<boolean>(true);
  houseId = new Field<string>('');
  lastActivity = new Field<number>(0);
  status = new Field<Status>(null, [...statusOptions]);
  locations = new Field<string[]>([]);
  settings = new Field<Settings>(new Settings());

  static getValue(device: Device, key: string): any {
    const targetKey = key as keyof Device;
    const targetField = device[targetKey] as { value?: any };

    if (targetField && targetField.value) {
      return targetField.value;
    }
    return null;
  }
}
