require("dotenv").config();
const enviroment = env.NODE_ENV || "devlopment";
const knex = require("knex");
const knexConfig = require("../knexfile")[enviroment];

module.exports = knex(knexConfig);
