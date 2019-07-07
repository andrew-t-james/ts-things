import UserForm from './views/UserForm';
import User from './models/User';

const user = User.buildUser({ name: 'joben', age: 36 });

const root = document.querySelector('#root');

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw Error('Root Element not found');
}
