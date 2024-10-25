require("dotenv").config({ path: "../.env" });
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const port = process.env.PORT || 3002;

const http = createServer();
const io = new Server(http, {
  cors: {
    origin: "http://localhost:8000",
  },
});

const socketMongo = require("./routes/socketMongo");

let dbEnv;
if (process.env.NODE_ENV !== "production") {
  dbEnv = `${process.env.DB_HOST_LOCAL}`;
} else {
  dbEnv = `${process.env.DB_HOST_PROD}`;
}
const mongoDB = `${dbEnv}/${process.env.DB_NAME}`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

if (process.env.NODE_ENV !== "production") {
  app.set("trust proxy");
  io.use((socket, next) => {
    const handshakeData = socket.request;
    // make sure the handshake data looks good as before
    // if error do this:
    // next(new Error("not authorized"));
    // else just call next
    next();
  });
}

app.use(express.json());
app.use(cors());
app.use(
  "/",
  express.static(path.join(__dirname, "public"), { maxAge: 31536000 })
);

app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "public/robots.txt"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/game/:gameId", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

io.on("connection", (socket) => {
  console.log("User Connected");

  app.set("socketio", socket);

  socket.on("turn", (data) => {
    socket.to(data.gameId).emit("updateGame", {
      gameId: data.gameId,
      grid: data.winMatrix,
      bingo: data.bingo,
    });
    socketMongo.updateGame(data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

const gameRouter = require("./routes/Games");
app.use("/api/v1", gameRouter);

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
