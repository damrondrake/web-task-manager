
// Simple Express backend for Task Manager
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// In-memory task storage
let tasks = [];
let nextId = 1;

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  if (!title) return res.status(400).json({ error: 'Title required' });
  const task = {
    id: nextId++,
    title,
    description: description || '',
    completed: false,
    dueDate: dueDate || '',
    priority: priority || 'Medium',
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Update or toggle completion, due date, or priority
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const update = req.body;
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  Object.assign(task, update);
  res.json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks.splice(index, 1);
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
