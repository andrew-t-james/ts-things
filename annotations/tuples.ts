/* eslint-disable no-unused-vars */
// tuples can give fixed types for array like data structures

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};


// const pepsi: (string | number | boolean)[]

// pepsi: [string, boolean, number] creates a tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

// using a type instead
type Drink = [string, boolean, number]
const sprite: Drink = ['clear', true, 40];

// Tuples and why you might not use them
// they can make it hard to understand what you are trying to understand about the code
const carSpecs: [number, number] = [400, 3345];

// alternative
const carStats = {
  horsePower: 400,
  weight: 3345
};