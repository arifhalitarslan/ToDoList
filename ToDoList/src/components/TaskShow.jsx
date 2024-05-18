import React from 'react'
import { useState } from 'react';
import TaskCreate from './TaskCreate';

function TaskShow({task,onDelete,onUpdate}) {

  const [showEdit, setShowEdit] = useState(false);
    console.log(task);

    const handleDeleteClick = ()=>{
        onDelete(task.id);
    }

    const handleEditClick = ()=>{
    setShowEdit(true);
    }

    const handleSubmit = (id,updatedTitle,updatedTaskDesc)=>{
      setShowEdit(false);
      onUpdate(id,updatedTitle,updatedTaskDesc);
      }

    
  return (
    <div className='Task-show'>

    {
      showEdit ? <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />:  <div> 
      
      <h3 className='task-title' style={{fontFamily:'cursive'}}>Title</h3>
      <p>{task.title}</p>
      <h3 className='task-title' style={{fontFamily:'cursive'}}>Description</h3>
      <p>{task.taskDesc}</p>

<div>
  <button onClick={handleDeleteClick} className='task-delete'>Delete</button>
  <button onClick={handleEditClick} className='task-edit'>Edit</button>
</div></div> 

}

    </div>
  )
}

export default TaskShow