/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Check if the wines table exists
  const tableExists = await knex.schema.hasTable("whitewines");

  const redWineData = require("../data/whiteWines.json");

  if (tableExists) {
    // Deletes ALL existing entries
    await knex("whitewines").del();

    // Insert wine data into the database
    await knex("whitewines").insert(redWineData);
  } else {
    console.log(
      "The 'whitewines' table does not exist. Skipping seed process."
    );
  }
};
