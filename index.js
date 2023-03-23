import express from "express";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3000;

const text = process.env.TEXT || "DEFAULT";

app.get("/", (req, res) =>
  res.send(`Hello World! I'm the updated file!
The value of const text is ${text}, I'm deployed by beanstalk
`)
);

app.listen(port, () => console.log(`Express app running on port ${port}`));
