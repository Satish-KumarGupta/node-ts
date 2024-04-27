import express, { Request, Response } from "express";
import { router } from "./routes/routes";
import connects from "./config/db";
const app = express();

const PORT = 5000;

app.use('/', router);
app.use('/', router);
connects();
app.listen(PORT || 5000, (): void => {
  console.log(`Server running on port ${PORT}`);
});
