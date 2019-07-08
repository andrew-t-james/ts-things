import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['passwords-here']
  })
);
app.use(router);

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on port 3000'));
