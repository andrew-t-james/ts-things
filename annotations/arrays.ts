/* eslint-disable no-unused-vars */
const carMakers = ['ford', 'toyota', 'chevy'];

// when initialized with no values and annotations
const unknownCarMakers: string[] = [];

// will show type as dates: Date[]
const dates = [new Date(), new Date()];

// will show type as carsByMake: string[][]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['lancer']
];

// typescript will help with inference when extracting values
// type = myCar: sting
const myCar = carMakers[0];
// type = yourCar: sting
const yourCar = carMakers.pop();

carMakers.push(100);

// typescript will use the type and give you back the methods based on strings here
// || the methods of which ever type you are using
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types

const importDates: (Date | string)[] = [new Date()];

importDates.push('2030-10-10');
importDates.push(new Date());