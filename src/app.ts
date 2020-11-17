import server from './loaders/express';
import config from './config'

server.listen(config.port, () => {
  console.log(`${config.nameAPI} running on port ${config.port}`);
})
  .on('error', (e) => console.error(e));
