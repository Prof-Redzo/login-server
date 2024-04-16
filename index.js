import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import authRoutes from "./routes/auth.routes.js";

const app = express();

const PORT = 4000;

// add body property to request object (req)
app.use(bodyParser.json());

app.get("/", ( req, res) => {

  res.send("Working!!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});