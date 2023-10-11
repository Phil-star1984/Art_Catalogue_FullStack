import express from "express";
import session from "express-session";
import cors from "cors";
import paintingsRouter from "./routes/paintingsRouter.js";
import sessionRouter from "./routes/sessionRouter.js";
import "./db/server.js";

const PORT = process.env.PORT || 8000;
const app = express();

const sess = {
  secret: "keyboard cat",
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(session(sess));

app.use("/paintings", paintingsRouter);
app.use("/session", sessionRouter);

/* app.get("/setname/:username", (req, res) => {
  req.session.username = req.params.username;
  res.send(`Hello, ${req.session.username}, you are logged in!`);
});

app.get("/getname", (req, res) => {
  res.send(`You are User ${req.session.username}`);
});
 */
app.listen(PORT, (req, res) => {
  console.log(`Example App listening on http://localhost:${PORT}`);
});
