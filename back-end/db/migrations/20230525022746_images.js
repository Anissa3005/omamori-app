/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("omamori", (table) => {
    table.increments("id").primary;
    table
      .bigInteger("id_user")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.string("img_url").notNullable();
    table.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("omamori");
};
