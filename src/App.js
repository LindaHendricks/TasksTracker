import Header from './components/Header';
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';
import { useState, useEffect } from 'react';

function App() {
   
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


    //Add Task Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task}
      setTasks([...tasks,newTask])
    }
    //Delete Tasks will need the id to target which one to hide - We use her ethe filter method
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder will need the id to target which one to toggle
    const toggleReminder = (id) => {
      // console.log(id)
      setTasks(tasks.map((task) => 
      task.id == id ? {... task, reminder:
      !task.reminder} : task 
       )
      )
    }


  return (
     <div className="container">
       <Header onAdd={() =>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
       {showAddTask && <AddTask addTask={addTask} /
       >}
       {tasks.length > 0 ? <Tasks onReminder={toggleReminder}tasks={tasks} onDelete={deleteTask}/> : 
       "No Task to show"}
      </div>
  );
}

export default App;
