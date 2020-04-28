require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const port = process.env.PORT || 3000;

const socketMongo = require("./server/routes/socketMongo");

const mongoDB = `${process.env.DB_HOST}${process.env.DB_NAME}`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

if (process.env.NODE_ENV !== "production") {
  app.set("trust proxy");
  io.set("origins", "http://localhost:8000");
}

io.set("origins", "*:*");
app.use(express.json());
app.use(cors());
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("turn", (data) => {
    socket.broadcast.emit("updateGame", { grid: data.winMatrix });
    socketMongo.updateGame(data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

const gameRouter = require("./server/routes/Games");
app.use("/", gameRouter);

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
