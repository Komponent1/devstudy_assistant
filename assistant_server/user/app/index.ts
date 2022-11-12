import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import router from './router/router';

import { errorHandler } from './middleware';

const app = express();
app.use('/public', express.static(`${__dirname}/public`));
if (process.env.NODE_ENV !== 'development') {
  app.use(cors({
    origin: '*',
    credentials: true,
  }));
}
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('combined'));
app.use('/user', router);

app.use(errorHandler);

// eslint-disable-next-line no-console
const server = app.listen(8001, () => { console.log('server listen'); });

export default server;
