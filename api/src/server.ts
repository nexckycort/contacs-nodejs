import http from 'http';
import app from './config/express';
import { nameAPI, port } from './config';

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`${nameAPI} running on port ${port}`);
})
  .on('error', (e) => console.error(e));
