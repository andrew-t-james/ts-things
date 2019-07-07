import User from './models/User';

const user = new User({ id: 1, name: 'Hank Mardukus', age: 38 });

user.fetch();
user.on('change', () => console.log(user));
user.save();
user.on('save', () => console.log(user));
