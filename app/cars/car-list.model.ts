export class CarsListModel {
  public id: number;
  public name: string;
  public shortDescription: string;
  constructor(id: number , name: string , shortDescription: string = '') {
    this.id = id;
    this.name = name;
    this.shortDescription = shortDescription;
  }
}
