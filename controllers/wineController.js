import knex from "knex";
import knexfile from "../knexfile.js";
const db = knex(knexfile);
const wineList = async (_req, res) => {
  try {
    const data = await db("wines");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving wines: ${err}`);
  }
};

const redWines = async (_req, res) => {
  try {
    const data = await db("redwines");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving wines: ${err}`);
  }
};

const whiteWines = async (_req, res) => {
  try {
    const data = await db("whitewines");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving wines: ${err}`);
  }
};

const roseWines = async (_req, res) => {
  try {
    const data = await db("rosewines");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving wines: ${err}`);
  }
};

const sparklingWines = async (_req, res) => {
  try {
    const data = await db("sparklingwines");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving wines: ${err}`);
  }
};

export { wineList, redWines, whiteWines, roseWines, sparklingWines };
