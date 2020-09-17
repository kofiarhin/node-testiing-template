const express = require("express")
const app = express();
require("./db/mongoose");

const port = process.env.PORT

app.listen(port, () => console.log("listening on port" + port))