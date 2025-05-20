const { readdirSync } = require("fs");
const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
require("dotenv").config();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(require("cors")());
app.use(require("morgan")("dev"));

readdirSync("./routes").map((r) => {
  app.use("/api/eternal", require(`./routes/${r}`));
});

const port = process.env.PORT || 3000;

const runServer = () => {
  app.listen(port, () => {
    console.log(`GgenEternal listening on port ${port}`);
  });
  connectDB(process.env.MONGO_URI);
};

runServer();
