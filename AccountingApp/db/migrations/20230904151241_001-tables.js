/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("address", (table) => {
      table.increments("id").primary();
      table.string("neighborhood");
      table.string("district").notNullable();
      table.string("city").notNullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTable("factory", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable().unique();
      table.string("tax_number");
      table.integer("people_id").unsigned();
      table.foreign("people_id").references("id").inTable("people");
      table.string("branch");
      table.string("address");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("vehicle", (table) => {
      table.increments("id").primary();
      table.string("plate_number").notNullable().unique();
      table.string("type");
      table.integer("owner_id").unsigned();
      table.foreign("owner_id").references("id").inTable("owner");
      table.integer("driver_id").unsigned();
      table.foreign("driver_id").references("id").inTable("driver");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("driver", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("tc").unique();
      table.string("phone_number").unique();
      table.timestamps(true, true);
    }),
    knex.schema.createTable("owner", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("tc").unique();
      table.integer("address_id").unsigned();
      table.foreign("address_id").references("id").inTable("address");
      table.string("phone_number").unique();
      table.string("iban");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("product", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable().unique();
      table.float("price");
      table.timestamps(true, true);
    })
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTableIfExists("product"),
    knex.schema.dropTableIfExists("owner"),
    knex.schema.dropTableIfExists("driver"),
    knex.schema.dropTableIfExists("vehicle"),
    knex.schema.dropTableIfExists("factory"),
    knex.schema.dropTableIfExists("address"),
  ]);
};
