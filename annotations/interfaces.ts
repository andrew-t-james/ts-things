/* eslint-disable no-unused-vars */
// interfaces are a NEW TYPE available to you
interface Reportable {
  summary(): string;
}

const oldCar = {
  name: 'civic',
  year: new Date(),
  broken: true,
  beginsWithVowel(word: string): boolean {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(word[0].toLowerCase()) !== -1;
  },
  summary(): string {
    return `Your car is ${this.beginsWithVowel(this.name) ? 'an' : 'a'} ${this.name}?`;
  }
};

const soda = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCar);
printSummary(soda);