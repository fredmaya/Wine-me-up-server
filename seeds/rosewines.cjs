/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Check if the wines table exists
  const tableExists = await knex.schema.hasTable("rosewines");

  const redWineData = require("../data/roseWines.json");

  if (tableExists) {
    // Deletes ALL existing entries
    await knex("rosewines").del();

    // Insert wine data into the database
    await knex("rosewines").insert(redWineData);
  } else {
    console.log("The 'rosewines' table does not exist. Skipping seed process.");
  }
};
