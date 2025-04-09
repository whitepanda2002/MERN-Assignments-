const express = require("express");
const app = express();
app.use(express.json());

const PORT = 5000;

// GET /welcome
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory user array
let users = [
  { id: 1, name: "John", email: "john@example.com" }
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST new user
app.post("/users", (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.map(user => user.id == id ? { ...user, ...req.body } : user);
  res.json({ message: "User updated" });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id != id);
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

