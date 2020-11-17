import mongoose from 'mongoose';
import config from '../config';

const db = mongoose.connection;

mongoose.connect(config.databaseURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

db.on('error', (error: Error) => {
  console.log('connection error: ', error);
});

db.once('open', () => {
  console.log('The connection to MongoDB was successful!');
});

export default db;
