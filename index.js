const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: Path2D.join(__dirname, "public") });
});

module.exports = app;
app.listen(process.env.PORT || 3000);
