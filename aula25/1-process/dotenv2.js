import dotenv from "dotenv";

dotenv.config();
console.log(process.env);

console.log({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    environment: process.env.ENV,
    secret_key: process.env.SECRET_KE,
  });