/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require("bcrypt");
const hash1 = await bcrypt.hash("100", 10);
const hash2 = await bcrypt.hash("200", 10);
const hash3 = await bcrypt.hash("300", 10);

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { username: "test1", password: hash1 },
    { username: "test2", password: hash2 },
    { username: "test3", password: hash3 },
  ]);
};
