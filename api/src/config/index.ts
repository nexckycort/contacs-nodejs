if (!process.env.NODE_ENV) require('dotenv').config();

export const nameAPI = process.env.NAME_API;
export const port = process.env.PORT || 9000;
export const mongoDB = process.env.DATABASE_MONGO;
export const secretKey = process.env.SECRETKEY;
