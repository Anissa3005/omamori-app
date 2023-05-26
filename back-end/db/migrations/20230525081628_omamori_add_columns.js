/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("omamori", (table) => {
    table.string("latitude").notNullable;
    table.string("longitude").notNullable;
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("omamori", (table) => {
    table.dropColumn("latitude");
    table.dropColumn("longitude");
  });
};
