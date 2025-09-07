// Task Manager App - React frontend
// Implements add, view, complete/incomplete, delete, and filter tasks


import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const API_URL = 'https://web-task-manager-24ti.onrender.com/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Always fetch tasks from backend on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
  // Get all tasks from backend
  setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
      setError('');
    } catch (err) {
  setError('Failed to fetch tasks');
    }
    setLoading(false);
  };

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, dueDate, priority }),
      });
      if (!res.ok) throw new Error('Add failed');
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('Medium');
      fetchTasks();
    } catch {
      setError('Failed to add task');
    }
    setLoading(false);
  };

  // Toggle completion status with confetti animation
  const toggleTask = async (id, completed) => {
    setLoading(true);
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed }),
      });
      if (!completed) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 1200);
      }
      fetchTasks();
    } catch {
      setError('Failed to update task');
    }
    setLoading(false);
  };

  const deleteTask = async (id) => {
  // Delete a task
  setLoading(true);
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchTasks();
    } catch {
  setError('Failed to delete task');
    }
    setLoading(false);
  };

  const filteredTasks = tasks.filter((task) => {
  // Filter tasks by status
  if (filter === 'All') return true;
  if (filter === 'Completed') return task.completed;
  if (filter === 'Incomplete') return !task.completed;
  return true;
}).slice().sort((a, b) => {
  const priorityOrder = { High: 0, Medium: 1, Low: 2 };
  return (priorityOrder[a.priority] ?? 3) - (priorityOrder[b.priority] ?? 3);
});

  // Task stats
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className={`App${darkMode ? ' dark' : ''}`}>
      <div className="container">
        <div className="add-task-section">
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Task Manager</h1>
            <button
              style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', borderRadius: 8, border: 'none', background: darkMode ? '#222' : '#007bff', color: '#fff', cursor: 'pointer' }}
              onClick={() => setDarkMode(dm => !dm)}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <div className="task-stats" style={{ marginBottom: '1rem', fontWeight: 500, color: darkMode ? '#fff' : '#333' }}>
            {`You've completed ${completedCount} out of ${totalCount} tasks!`}
          </div>
          {showConfetti && (
            <>
              <div className="confetti-bg"></div>
              <div ref={confettiRef} className="confetti">
                <span role="img" aria-label="confetti">🎉</span>
              </div>
            </>
          )}
          <form onSubmit={addTask}>
            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Description (optional)"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <input
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              name="dueDate"
            />
            <select name="priority" value={priority} onChange={e => setPriority(e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <button type="submit" disabled={loading}>Add Task</button>
          </form>
          {/* Task list directly underneath add task section */}
          <div className="task-list-section">
            <div className="filters">
              <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
              <button className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>Completed</button>
              <button className={filter === 'Incomplete' ? 'active' : ''} onClick={() => setFilter('Incomplete')}>Incomplete</button>
            </div>
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}
            <ul>
              {['High', 'Medium', 'Low'].map(priorityLevel => {
                const groupTasks = filteredTasks.filter(task => task.priority === priorityLevel);
                if (groupTasks.length === 0) return null;
                return (
                  <React.Fragment key={priorityLevel}>
                    <li style={{ background: 'transparent', boxShadow: 'none', marginBottom: '0.2rem', padding: 0 }}>
                      <h3 style={{ margin: '0.7rem 0 0.3rem 0', color: '#007bff', fontWeight: 600 }}>{priorityLevel} Priority</h3>
                    </li>
                    {groupTasks.map(task => (
                      <li key={task.id}>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          <span
                            className={`task-title${task.completed ? ' completed' : ''}`}
                            tabIndex={0}
                            role="button"
                            aria-pressed={task.completed}
                            style={{ flex: '2 1 0', minWidth: 0 }}
                          >
                            {task.title}
                          </span>
                          <span className="task-desc" style={{ flex: '1 1 0', minWidth: 0 }}>
                            {task.description || ''}
                          </span>
                          <span className="task-desc" style={{ flex: '1 1 0', minWidth: 0 }}>
                            {task.dueDate ? `Due: ${task.dueDate}` : ''}
                          </span>
                          <span className="task-desc" style={{ flex: '1 1 0', minWidth: 0 }}>
                            {task.priority ? `Priority: ${task.priority}` : ''}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            className={task.completed ? 'mark-btn incomplete' : 'mark-btn complete'}
                            onClick={() => toggleTask(task.id, task.completed)}
                            disabled={loading}
                            aria-label={task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                          >
                            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                          </button>
                          <button className="delete-btn" onClick={() => deleteTask(task.id)} disabled={loading}>Delete</button>
                        </div>
                      </li>
                    ))}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
