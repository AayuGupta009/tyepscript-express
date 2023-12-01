import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response): void => {
  res.json({ message: "Hello World!" });
});

app.listen(3001, (): void => {
  console.log("Server Running!!!!");
});
