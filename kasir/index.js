const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;
const route = require("./routes/index");
const errHandler = require("./middleware/errHandler");

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
