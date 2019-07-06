import User from './models/User';

const newUser = new User({ id: 1 });
newUser.fetch();

setTimeout(() => {
  console.log(newUser);
}, 4000);
