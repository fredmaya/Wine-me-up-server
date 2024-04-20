import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import wineRoutes from "./routes/wineRoute.js";
import promptRoutes from "./routes/promptRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Welcome to my Wine Me UP! API");
});

app.use("/data", wineRoutes);
app.use("/prompt", promptRoutes);

app.listen(port, () => console.log(`Listening on ${port}`));
