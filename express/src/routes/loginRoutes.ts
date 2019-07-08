import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
};

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div>Logged in</div>
      <a href="/logout">log out</a>
    </div>
  `);
  } else {
    res.send(`
    <div>
      <div>Logged out</div>
      <a href="/login">log in</a>
    </div>
  `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'me@mail.com' && password === 'pass') {
    req.session = {
      loggedIn: true
    };
    res.redirect('/');
  } else {
    res.send('Invalid email password');
  }
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route user');
});

export { router };
