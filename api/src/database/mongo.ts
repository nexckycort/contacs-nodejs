import mongoose from 'mongoose';
import { mongoDB } from '../config';

const db = mongoose.connection;

mongoose.connect(mongoDB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

db.on('error', (error: any) => {
  console.log(error);
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('The connection to MongoDB was successful!');
});

export default db;
