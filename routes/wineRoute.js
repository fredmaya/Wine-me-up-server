import { Router } from "express";
import {
  wineList,
  redWines,
  whiteWines,
  roseWines,
  sparklingWines,
  dessertWines,
} from "../controllers/wineController.js";

const wineRouter = Router();

wineRouter.route("/").get(wineList);
wineRouter.route("/red").get(redWines);
wineRouter.route("/white").get(whiteWines);
wineRouter.route("/rose").get(roseWines);
wineRouter.route("/sparkling").get(sparklingWines);
wineRouter.route("/dessert").get(dessertWines);

export default wineRouter;
