import express from "express";
import { Router } from "express";
import * as paintingsController from "../controllers/paintings.js";

const paintingsRouter = express.Router();

paintingsRouter
  .route("/")
  .get(paintingsController.getAllPaintings)
  .post(paintingsController.addNewPainting);

paintingsRouter
  .route("/:id")
  .get(paintingsController.getPaintingById)
  .put(paintingsController.updatePainting)
  .delete(paintingsController.deletePainting);

export default paintingsRouter;
