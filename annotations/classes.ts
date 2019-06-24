/* eslint-disable no-unused-vars */
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    console.log(`I have ${this.wheels} wheels`)
    this.drive()
    this.honk()
  }
}

const vehicle = new Car(4, 'orange');
// using startDrivingProcess because drive on car is private
vehicle.startDrivingProcess();
console.log(vehicle.color);
// cant call honk here because it is protected
// vehicle.honk();