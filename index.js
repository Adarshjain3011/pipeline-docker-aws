const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.json({ name: "John Doe", age: 30 });
});

app.post("/user", (req, res) => {
  res.json(req.body);

  console.log(req.body);

  res.status(201).json({
    message: "data updated successfully",
  });
});

app.get("/count", (req, res) => {
  res.json({ count: 100 });
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
