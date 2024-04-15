/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Check if the wines table exists
  const tableExists = await knex.schema.hasTable("wines");

  // Load wine data from JSON file
  const wineData = require("../data/winesApi.json");

  if (tableExists) {
    // Deletes ALL existing entries
    await knex("wines").del();

    // Insert wine data into the database
    await knex("wines").insert(wineData);
  } else {
    console.log("The 'wines' table does not exist. Skipping seed process.");
  }
};
