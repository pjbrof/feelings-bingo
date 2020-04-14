const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const mongoDB = "mongodb://127.0.0.1/feelingsbingo";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());
// app.use(express.static("public"));

const gameRouter = require("../server/routes/Games");
app.use("/", gameRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
