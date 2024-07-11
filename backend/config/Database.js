// KONFIGURASI DATABASE DENGAN MYSQL

import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

export default db;
