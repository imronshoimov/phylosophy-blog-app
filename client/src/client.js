const { config } = require("dotenv");
const express = require("express");
const path = require("path/posix");
const app = express();
const { PORT } = require("./config/keys");
const routes = require("./routes/index");

config();
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));