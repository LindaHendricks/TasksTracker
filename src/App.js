import Header from './components/Header';
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';
import {useState} from 'react'


function App() {
   
   
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appoitment',
        day:'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting a School',
        day:'Feb 6th at 1:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day:'Feb 5th at 2:30pm',
        reminder: false,
    }])

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
     <Header/>
     <AddTask />
     {tasks.length > 0 ? <Tasks onReminder={toggleReminder}tasks={tasks} onDelete={deleteTask}/> : "No Task to show"}
    </div>
  );
}

export default App;
