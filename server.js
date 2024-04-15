import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { default as wineRouts } from "./routes/wineRoute.js";

try {
  dotenv.config();
} catch (error) {
  console.error("Failed to load .env file.");
}

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Welcome to my API");
});

app.use("/data", wineRouts);

app.listen(port, () => console.log(`Listening on ${port}`));
