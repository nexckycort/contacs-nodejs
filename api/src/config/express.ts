import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routesV1 from '../routes/v1';
import { NotFoundError } from '../helpers/api.error';
import db from '../database/mongo';

const app: Application = express();

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(morgan('dev'));

app.use('/v1', routesV1);

// catch 404 and forward to error handler
app.use((_req: Request, res: Response, next: NextFunction) => next(NotFoundError(res)));

db.on('open', function () {
  console.log('The connection to MongoDB was successful!');
});

export default app;
