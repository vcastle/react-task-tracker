import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Skull Crushers",
      day: "3 x 15",
      reminder: true,
    },
    {
      id: 2,
      text: "BB Bicep Curls",
      day: "4 x 12",
      reminder: true,
    },
    {
      id: 3,
      text: "Wide Grip Lat Pulldowns",
      day: "3 x 15",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks
      .map((task) => task.id === id ? 
        { ...task, reminder: !task.reminder} : task))
        console.log('tasks ', tasks);
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>}
     
      {tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onToggle={toggleReminder} 
          onDelete={deleteTask}/> : 
          'No Tasks Available'}
    </div>
  );
}

export default App;
