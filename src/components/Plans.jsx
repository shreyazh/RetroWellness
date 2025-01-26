import { useState } from "react";
import React from "react";
import '../App.css'
import './Plans.css'

const Plan = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Morning Yoga", description: "Start your day with some stretches", completed: false },
    { id: 2, title: "Mindful Breathing", description: "Take a few moments to breathe deeply", completed: true },
  ]);

  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value
    });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.description) {
      setTasks([...tasks, { id: Date.now(), ...newTask, completed: false }]);
      setNewTask({ title: "", description: "" });
    }
  };

  const handleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="plan-container">
      <section className="create-task">
        <h2
          className="font-size: 2rem;
    text-shadow: 0px 0px 10px #00ffcc;"
        >
          Lets Plan Your Wellness Routine!
        </h2>
        <form onSubmit={handleTaskSubmit}>
          <div className="task-field">
            <label>Task Title:</label>
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleTaskChange}
              placeholder="Enter task title"
            />
          </div>
          <div className="task-field">
            <label>Task Description:</label>
            <textarea
              name="description"
              value={newTask.description}
              onChange={handleTaskChange}
              placeholder="Enter task description"
            ></textarea>
          </div>
          <button type="submit">Add Task</button>
        </form>
      </section>

      <section className="task-list">
        <h2
          className="font-size: 2rem;
    text-shadow: 0px 0px 10px #00ffcc;"
        >
          Your Wellness Tasks
        </h2>
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
