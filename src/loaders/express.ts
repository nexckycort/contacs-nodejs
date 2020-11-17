import express, { Request, Response, NextFunction, Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import http from 'http';

import routesV1 from '../routes/v1';
import { NotFoundError } from '../helpers/api.error';
import config from '../config';
import db from './mongoose';

const app: Application = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(morgan('dev'));

app.use(config.api.prefix, routesV1);

// catch 404 and forward to error handler
app.use((_req: Request, res: Response, next: NextFunction) => next(NotFoundError(res)));

app.set('port', config.port);

const server = http.createServer(app);

db.once('open', () => { });

export default server;
