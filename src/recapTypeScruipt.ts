const myName = 'Cristian';
const myAge = 18;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(56, 44);
class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private favoriteHobby: string,
  ) {}
  getSummary() {
    return `Hi! My name is ${this.name} ${this.lastName}, I have ${this.age} years old and my favorite hobby is ${this.favoriteHobby}`;
  }
}

class Automobile {
  private brand;
  private model;
  private color;
  private licensePlate;
  private price;

  constructor(
    brand: string,
    model: number,
    color: string,
    licensePlate: string,
    price: number,
  ) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.licensePlate = licensePlate;
    this.price = price;
  }

  getSummary() {
    return `My car is ${this.brand} brand, model ${this.model} white ${this.color}, license plate ${this.licensePlate} and it costs about ${this.price}`;
  }
}
