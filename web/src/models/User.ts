import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }

  on(eventName: string, callBack: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => callback());
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}

export default User;
