import express, { Application, Request, Response } from 'express';

import routesV1 from './routes/v1';

const app: Application = express();

app.use('/', routesV1);

app.listen(9000, () => {
  console.log('server on running');
})