import View from './View';
import User, { UserProps } from '../models/User';

class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSaveClick = () => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">change name</button>
        <button class="set-age">set random age</button>
        <button class="save-model">save name</button>
      </div>
    `;
  }
}

export default UserForm;
