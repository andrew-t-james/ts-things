/* eslint-disable no-unused-vars */

// destructuring
const profile = {
  name: 'Joben',
  age: 22,
  coords: {
    lat: 0,
    lng: 14
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number, lng: number} } = profile;