// import module
import express from "express";
import cors from "cors";

// import other module
import postroute from "./routes/posts.js";
import userroute from "./routes/user.js";

// initialization express framework
export const app = express();

// use all the module
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());

// set router
app.use("/posts", postroute);
app.use("/user", userroute);
app.get("/", (req, res) => {
  res.send("Welcome to unique-memory");
});

// module.exports = app;
