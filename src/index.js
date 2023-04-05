const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const route = require("./routes");
const app = express();
const port = 3000;
// HTTP LOGGER
const morgan = require("morgan");

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
