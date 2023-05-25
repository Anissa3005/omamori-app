const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Listen to port ${PORT}`);
});
