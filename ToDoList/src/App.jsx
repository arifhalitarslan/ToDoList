import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'


function App() {

  const createTask =(title,taskDesc)=> {
    console.log(title, taskDesc);
  }

  return (
    <div className='App'>
      <h1 className='ToDoListHeaderMain'>To-Do List</h1>
     <TaskCreate onCreate={createTask}/>
     <h1>Tasks</h1>
     <TaskList/>
    </div>
  )
}

export default App
