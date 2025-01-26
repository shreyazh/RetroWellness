import { useState, useEffect } from "react";
import React from "react";
import "../App.css";
import "./Plans.css";

const Plan = () => {
  // Load tasks from localStorage when the component mounts
  const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    // Save tasks to localStorage whenever tasks change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.description) {
      const newTaskData = { id: Date.now(), ...newTask, completed: false };
      setTasks([...tasks, newTaskData]);
      setNewTask({ title: "", description: "" });
    }
  };

  const handleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="plan-container">
      <section className="create-task">
        <h2>Let's Plan Your Wellness Routine!</h2>
        <form onSubmit={handleTaskSubmit}>
          <div className="task-field">
            <label>Task Title:</label>
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleTaskChange}
              placeholder="Enter task title"
              required
            />
          </div>
          <div className="task-field">
            <label>Task Description:</label>
            <textarea
              name="description"
              value={newTask.description}
              onChange={handleTaskChange}
              placeholder="Enter task description"
              required
            ></textarea>
          </div>
          <button type="submit">Add Task</button>
        </form>
      </section>

      <section className="task-list">
        <h2>Your Wellness Tasks</h2>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`task ${task.completed ? "completed" : ""}`}
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleTaskCompletion(task.id)}>
                {task.completed ? "Done!" : "Complete Task"}
              </button>
              <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No tasks yet. Start planning your wellness routine!</p>
        )}
      </section>
    </div>
  );
};

export default Plan;
