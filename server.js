import express from "express";
import cors from "cors";
import { connectDB } from "./src/common/db.js";
import peliculaRoutes from "./src/pelicula/routes.js";
import actorRoutes from "./src/actor/routes.js";

const app = express();
const PORT = 8082;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Bienvenido a EV3 de Gustavo");
});

app.use("/api", peliculaRoutes);
app.use("/api", actorRoutes);

connectDB().then((ok) => {
  if (ok) {
    app.listen(PORT, () => {
      console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
    });
  } else {
    console.log("Error base de datos");
  }
});
