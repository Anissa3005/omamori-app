const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("omamori", (table) => {
    table.dropColumn(true);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.table("omamori", (table) => {
    table.dropColumn("created_at");
    table.dropColumn("updated_at");
  });
};
