export class BusStation {
  id: string;
  long: number;
  lat: number;
  name: string

  constructor(id: string, long: number, lat: number, name: string) {
    this.id = id;
    this.long = long;
    this.lat = lat;
    this.name = name;
  }
}
