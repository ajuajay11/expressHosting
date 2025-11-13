const express = require("express");
const http = require("http");

const connectToDatabase = require("./lib/connectMongo");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const routeData = require("./router");
const server = http.createServer(app);

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
connectToDatabase();

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

// Sample route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", routeData);

const PORT = process.env.PORT || 3000;

// ONLY listen on 'server', NOT 'app'
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});