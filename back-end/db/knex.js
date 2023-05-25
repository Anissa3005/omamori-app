require("dotenv").config();
const enviroment = process.env.NODE_ENV || "development";
const knex = require("knex");
const knexConfig = require("../knexfile")[enviroment];

module.exports = knex(knexConfig);
