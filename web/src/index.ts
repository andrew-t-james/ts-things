import User from './models/User';

const user = new User({ name: 'andrew', age: 38 });

console.log(user.get('name'));
console.log(user.get('age'));
console.log(user.set({ name: 'joben' }));
console.log(user.get('name'));
console.log(user.get('age'));
