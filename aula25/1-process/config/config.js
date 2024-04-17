import program  from "../commander.js";
import dotenv from "dotenv";

const environment = program.Mode

console.log('AAAAA',environment);
//dotenv.js -mode DEVELOPMENT
dotenv.config({
  path: environment === "dev" ? "./.env.development" : ".env.production",
});

export default {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  environment: process.env.ENV,
  secret: process.env.SECRET_KEY,
  port: process.env.PORT,
};
