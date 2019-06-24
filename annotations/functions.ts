/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable id-length */
const add = (a: number, b:number): number => a + b;

// inference can analyze the function body and understand the return value
const subtract = (a: number, b:number) => a - b;


function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};


const logger = (message: string): void =>  {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// destructure with annotations

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
