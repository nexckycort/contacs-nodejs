import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  nameAPI: process.env.NAME_API,
  port: process.env.PORT || 9000,
  databaseURL: process.env.MONGODB_URI || '',
  jwtSecret: process.env.JWT_SECRET || '',
  api: {
    prefix: '/v1',
  }
};
