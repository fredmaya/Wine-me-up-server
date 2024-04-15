/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Check if the wines table exists
  const tableExists = await knex.schema.hasTable("sparklingwines");

  const redWineData = require("../data/sparklingWines.json");

  if (tableExists) {
    // Deletes ALL existing entries
    await knex("sparklingwines").del();

    // Insert wine data into the database
    await knex("sparklingwines").insert(redWineData);
  } else {
    console.log(
      "The 'sparklingwines' table does not exist. Skipping seed process."
    );
  }
};
