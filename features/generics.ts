class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  getAtIndex(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  getAtIndex(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  getAtIndex(index: number): T {
    return this.collection[index];
  }
}


// function with generics

function printString(arr: string[]): void {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for(let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

console.log(printHouseOrCars<House>([new House(), new House()]))
console.log(printHouseOrCars<Car>([new Car(), new Car()]))