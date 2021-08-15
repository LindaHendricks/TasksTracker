import Header from './components/Header';
import Tasks from './components/Tasks.jsx';
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


  return (
    <div className="container">
     <Header/>
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
