const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
const route = require("./routes/index");
const errHandler = require("./middleware/errHandler");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // Alamat frontend Anda
    methods: ["GET", "POST", "PUT", "DELETE"], // Metode HTTP yang diizinkan
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(route);
app.use(errHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
