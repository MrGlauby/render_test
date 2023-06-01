require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

const PORT = process.env.PORT || 8080;

db();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const pokemonRouter = require("./Routes/pokemon");

app.use("/", pokemonRouter);
app.get("/", (req, res) => {
  res.send("<h1>Check out our pokemon!</h1>");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
