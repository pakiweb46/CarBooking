export class CarsDetailModel {
  public id: number;
  public name: string;
  public shortDescription: string;
  public description: string;
  public image: string;
  constructor(id: number , name: string , shortDescription: string = '', description: string, image: string) {
    this.id = id;
    this.name = name;
    this.shortDescription = shortDescription;
    this.description = description;
    this.image = image;
  }
}
