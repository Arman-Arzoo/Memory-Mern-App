import { mongourl, dbStreamHandler, configObj } from "./dbconfig.js";
// const {mongourl, configObj,dbStreamHandler } = require('./dbconfig.js');
import mongoose from "mongoose";

export const connectToDb = () => {
  mongoose.connect(mongourl, configObj);

  const db = mongoose.connection;

  db.on("error", dbStreamHandler.error);
  db.on("open", dbStreamHandler.open);

  mongoose.set("useCreateIndex", true);
};
