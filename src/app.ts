import express, { Application, NextFunction, Request, Response } from "express";
// getting-started.js
const app: Application = express();
import cors from "cors";

app.use(cors());
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
  next();
});
export default app;
