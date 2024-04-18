/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Check if the wines table exists
  const tableExists = await knex.schema.hasTable("dessertwines");

  const redWineData = require("../data/dessertWines.json");

  if (tableExists) {
    // Deletes ALL existing entries
    await knex("dessertwines").del();

    // Insert wine data into the database
    await knex("dessertwines").insert(redWineData);
  } else {
    console.log(
      "The 'dessertwines' table does not exist. Skipping seed process."
    );
  }
};
