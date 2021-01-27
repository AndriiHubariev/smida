const express = require("express");
const path = require("path");
const tableRoutes = require("./routes/table");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "dist/smida-test")));
app.use("/api/table", tableRoutes);

app.use((req, res, next) => {
  res.sendFile("/index.html");
});

app.listen(PORT);
