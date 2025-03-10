import express, { Application } from "express";
import path from "path";
import mainRoutes from "./routes/main.routes";

const app: Application = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../dist/public")));

app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

app.get("/", mainRoutes);
app.get("/about", mainRoutes);
app.get("/contact", mainRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
