import UserEdit from './views/UserEdit';
import User from './models/User';

const user = User.buildUser({ name: 'joben', age: 36 });

const root = document.querySelector('#root');

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();
  console.log('userEdit:', userEdit);
} else {
  throw Error('Root Element not found');
}
