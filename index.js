const express = require("express");

const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.send("server start");
});

app.listen(port, () => {
  console.log(`Server Start`);
});
