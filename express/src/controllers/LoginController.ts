import { Request, Response } from 'express';
import { controller, get } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
  }
}

export default LoginController;
