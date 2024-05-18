import React from 'react'
import { useState } from 'react'

function TaskCreate({onCreate,task, taskFormUpdate,onUpdate}) {

    const [title, settitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    const handleSubmit =(event)=> {
     event.preventDefault();
     if(taskFormUpdate){
      onUpdate(task.id,title,taskDesc);
     }
     else{
      onCreate(title,taskDesc);
     }
     
     settitle('');
     setTaskDesc('');
    }


  return (

    <div>
      {taskFormUpdate ? 
      <div className='task-update'>
        <h1>Edit Task</h1>
        <form className='task-form'>
            <label className='task-label'>Edit Title</label>
            <input value={title} onChange={(e)=>{settitle(e.target.value)}} className='task-input'/>
            <label className='task-label'>Edit Task</label>
            <textarea value={taskDesc}  onChange={(e)=>{setTaskDesc(e.target.value)}} className='task-input' rows={5}/>
            <button className='taskUpdate-button' onClick={handleSubmit}>Update</button>
        </form>
    </div> 
     :
    <div className='task-create'>
        <h1>Please Enter Task!</h1>
        <form className='task-form'>
            <label className='task-label'>Title</label>
            <input value={title} onChange={(e)=>{settitle(e.target.value)}} className='task-input'/>
            <label className='task-label'>Task</label>
            <textarea value={taskDesc}  onChange={(e)=>{setTaskDesc(e.target.value)}} className='task-input' rows={5}/>
            <button className='task-button' onClick={handleSubmit}>Create</button>
        </form>
    </div> 

    }
    </div>

    
  )
}

export default TaskCreate