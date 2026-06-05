const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock database (replace with real DB later)
let items = [
  { id: 1, name: "Item 1", description: "Test item" },
  { id: 2, name: "Item 2", description: "Another item" },
];

// GET all items
app.get("/items", (req, res) => {
  res.json(items);
});

// POST new item
app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };

  items.push(newItem);
  res.json(newItem);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
