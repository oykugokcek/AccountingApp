/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  // return Promise.all([
  //   knex.schema.dropTableIfExists("factory"),
  //   knex.schema.dropTableIfExists("address"),
  //   knex.schema.dropTableIfExists("factory_branch"),
  //   knex.schema.dropTableIfExists("driver"),
  //   knex.schema.dropTableIfExists("vehicle"),
  //   knex.schema.dropTableIfExists("transport"),
  //   knex.schema.dropTableIfExists("product"),
  //   knex.schema.dropTableIfExists("waybill"),
  // ])
  // .then(() => {
    return Promise.all([
      knex.schema.createTable("factory", (table) => {
        table.increments("id").primary();
        table.string("name");
        table.string("tax_number").unique();
       
      }),
      knex.schema.createTable("address", (table) => {
        table.increments("id").primary();
        table.string("city").notNullable();
        table.string("district").notNullable().unique();
        table.string("neighborhood");
        table.string("street").unique();
        table.integer("post_code").unique();
       
      }),
      knex.schema.createTable("factory_branch", (table) => {
        table.increments("id").primary();
        table.integer("factory_id").unsigned();
        table.foreign("factory_id").references("id").inTable("factory");
        table.integer("address_id").unsigned();
        table.foreign("address_id").references("id").inTable("address");
        table.timestamps(true, true);
      }),
      knex.schema.createTable("driver", (table) => {
        table.increments("id").primary();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("tc_number").notNullable();
      }),
      knex.schema.createTable("vehicle", (table) => {
        table.increments("id").primary();
        table.string("plate_number").notNullable().unique();
        table.string("capacity").notNullable();
      }),
      knex.schema.createTable("transport", (table) => {
        table.increments("id").primary();
        table.integer("driver_id").unsigned();
        table.foreign("driver_id").references("id").inTable("driver");
        table.integer("vehicle_id").unsigned();
        table.foreign("vehicle_id").references("id").inTable("vehicle");
        table.timestamps(true, true);
      }),
      knex.schema.createTable("product", (table)=> {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.float("price").notNullable();
        table.timestamps(true, true);
      }),
      knex.schema.createTable("waybill", (table) => {
        table.increments("id").primary();
        table.integer("address_id").unsigned();
        table.foreign("address_id").references("id").inTable("address");
        table.integer("factory_branch_id").unsigned();
        table.foreign("factory_branch_id").references("id").inTable("factory_branch");
        table.integer("transport_id").unsigned();
        table.foreign("transport_id").references("id").inTable("transport");
        table.integer("product_id").unsigned();
        table.foreign("product_id").references("id").inTable("product");
        table.timestamps(true, true);
      })
    ]);}
//   }) 
// };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTableIfExists("waybill"),
    knex.schema.dropTableIfExists("product"),
    knex.schema.dropTableIfExists("transport"),
    knex.schema.dropTableIfExists("vehicle"),
    knex.schema.dropTableIfExists("driver"),
    knex.schema.dropTableIfExists("factory_branch"),
    knex.schema.dropTableIfExists("address"),
    knex.schema.dropTableIfExists("factory")
  ])
  
};