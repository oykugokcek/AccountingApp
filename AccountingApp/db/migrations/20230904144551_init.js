/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
      .dropTableIfExists("people")
      .createTable("people", (table) => {
        table.increments().primary();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("phone_number").notNullable();
        table.timestamp(true, true);
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("people");
  };
  