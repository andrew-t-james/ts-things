import User from './models/User';

const user = new User({ name: 'andrew', age: 38 });

user.on('change', () => {
  console.log('change');
});

user.on('click', () => {
  console.log('click');
});

user.trigger('change');
user.trigger('click');

console.log(user);
