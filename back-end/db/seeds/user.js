/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex("users").insert([
    { username: "test1", password: "100" },
    { username: "test2", password: "200" },
    { username: "test3", password: "300" },
  ]);
};
