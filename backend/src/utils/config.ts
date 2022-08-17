import * as dotenv  from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

/*
 * The default port of the application
 */
const PORT = process.env.PORT || 9002;

const ENV = process.env.ENV || "DEV";

export default {
  PORT,
  MONGODB_URI,
  ENV
};
