const express = require("express");
const app = express();
const PORT = 3001;

const myMiddleWare = (req, res, next) => {
  console.log("Middleware");
  req.currentTime = new Date(Date.now());
  next();
};

/*..........common middleware...........*/
app.use(myMiddleWare);

/*.............error handling middleware.............*/
app.use((req, res, next) => {
  res.send("404 Not found.");
});

app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  console.log("I am home. " + req.currentTime);
  res.send("I am home route.");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
