import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import { useState } from 'react';


function App() {

  const [Tasks, setTasks] = useState([]);


  const createTask =(title,taskDesc)=> {
   const createdTasks = [
    ...Tasks,
    {
      id:Math.round(Math.random()*999999),
      title,
      taskDesc
    }
   ];
   setTasks(createdTasks);
  }

  const deleteTaskById = (id)=>{
   const afterDeletingTasks = Tasks.filter((task)=>{
    return task.id !==id;
   })
   setTasks(afterDeletingTasks)
  }

  return (
    <div className='App'>
      <h1 className='ToDoListHeaderMain'>To-Do List</h1>
     <TaskCreate onCreate={createTask}/>
     <h1>Tasks</h1>
     <TaskList Tasks={Tasks} onDelete={deleteTaskById} />
    </div>
  )
}

export default App
