import User from './models/User';

const newUser = new User({ id: 1 });
const newUserTwo = new User({ name: 'joben', age: 36 });
newUser.set({ name: 'hank mardukus', age: 38 });
newUser.save();
// newUserTwo.fetch();
newUserTwo.save();

setTimeout(() => {
  console.log(newUser);
  console.log(newUserTwo);
}, 4000);
