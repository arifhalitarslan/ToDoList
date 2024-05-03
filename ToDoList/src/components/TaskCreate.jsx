import React from 'react'
import { useState } from 'react'

function TaskCreate({onCreate}) {

    const [title, settitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

   
    const handleChange = (event) => {
     settitle(event.target.value);
    }
    const handleTaskDesc = (event) => {
     setTaskDesc(event.target.value);
    }
    const handleSubmit =(event)=> {
     event.preventDefault();
     onCreate(title,taskDesc);
     settitle('');
     setTaskDesc('');
    }


  return (
    <div className='task-create'>
        <h1>Please Enter Task!</h1>
        <form className='task-form'>
            <label className='task-label'>Title</label>
            <input value={title} onChange={handleChange} className='task-input'/>
            <label className='task-label'>Task</label>
            <textarea value={taskDesc}  onChange={handleTaskDesc} className='task-input' rows={5}/>
            <button className='task-button' onClick={handleSubmit}>Create</button>
        </form>
    </div>
  )
}

export default TaskCreate