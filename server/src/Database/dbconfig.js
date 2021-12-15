import dotenv from "dotenv";

dotenv.config();

export const mongourl = process.env.MONGO_URI;

export const configObj = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

export const dbStreamHandler = {
  error: () => {
    console.log("Fail to connect Database");
  },
  open: () => {
    console.log("Connection successfully Completed");
  },
};
