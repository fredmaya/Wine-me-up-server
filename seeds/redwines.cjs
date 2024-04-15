/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Check if the wines table exists
  const tableExists = await knex.schema.hasTable("redwines");

  const redWineData = require("../data/redWines.json");

  if (tableExists) {
    // Deletes ALL existing entries
    await knex("redwines").del();

    // Insert wine data into the database
    await knex("redwines").insert(redWineData);
  } else {
    console.log("The 'redwines' table does not exist. Skipping seed process.");
  }
};
