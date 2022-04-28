import Route from "./route/routes.js";
import express from "express";

import cors from "cors";
import bodyparser from "body-parser";

import path from "path";

const app = express();
app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
const __dirname = path.resolve();
app.use("/", Route);

const port = process.env.PORT || 8008;
const URL =
  "mongodb+srv://pankaj:passpankaj@cluster0.3qirq.mongodb.net/MYPROJECT?retryWrites=true&w=majority";

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(port, () => {
  console.log(`server started Successfull on port ${port}`);
});

