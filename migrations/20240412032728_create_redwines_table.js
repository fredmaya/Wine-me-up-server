/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable("wines1", function (table) {
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
  return knex.schema.dropTable("wines");
}
