import * as Knex from "knex";

export async function up(knex) {
  // Your migration logic for the "up" operation
  return knex.schema.createTable("sparklingwines", function (table) {
    table.increments("id").primary();
    table.string("image");
    table.string("winery");
    table.string("wine");
    table.string("price_range");
    table.text("description");
    table.string("food_pairing");
    table.string("appetizer_pairing");
    table.string("country");
  });
}

export async function down(knex) {
  // Your migration logic for the "down" operation
  return knex.schema.dropTable("sparklingwines");
}
