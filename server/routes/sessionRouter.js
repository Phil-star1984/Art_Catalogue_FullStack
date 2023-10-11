import express from "express";
import { Router } from "express";

const sessionRouter = express.Router();

sessionRouter.get("/login", (req, res) => {
  res.sendFile(
    `/Users/philippmulfinger/Desktop/Art_Catalogue_FullStack/server/static/login.html`
  );
});

sessionRouter.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req);
  res.send(`Username: ${username} Password: ${password}`);
});

export default sessionRouter;
