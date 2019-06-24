/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
// types
const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = false;
const nothingMuch: null = null;
const nothing: undefined = undefined;

// built in objects
const now: Date = new Date();


// complex data types
const colors: string[] = ['red', 'green', 'blue'];
const numbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, true];

// Classes
class CarOne {}

const car: CarOne = new CarOne();

// Object literal
const point: { x: number, y: number } = {
  x: 10,
  y: 20
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  // eslint-disable-next-line no-console
  console.log(i);
};


// type annotations and when to use

//* 1.Function that returns 'any' type
const json = '{"x": 10, "y": 10}';
const coordinates: { x: number, y: number } = JSON.parse(json);

//* 2. When we declare a variable on one line and initialize it later
let words = ['hello', 'world'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'hello') {
    foundWord = true;
  }
}

//* 3.Variable can't be inferred correctly
let randomNumbers = [-10, -12, 15];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] > 0) {
    numberAboveZero = randomNumbers[i];
  }
}
