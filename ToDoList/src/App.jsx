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

  const editTaskById = (id,updatedTitle,updatedTaskDesc)=>{
    const updatedTasks = Tasks.map((task)=>{
      if(task.id === id){
        return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
      }
     return task;
    })
    setTasks(updatedTasks)
   }
  

  return (
    <div className='App'>
      <h1 className='ToDoListHeaderMain'>To-Do List</h1>
     <TaskCreate onCreate={createTask}/>
     <h1>Tasks</h1>
     <TaskList Tasks={Tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
