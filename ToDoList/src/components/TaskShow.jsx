import React from 'react'

function TaskShow({task,onDelete}) {
    console.log(task);

    const handleDeleteClick = ()=>{
        onDelete(task.id);
    }

  return (
   
   <div className='Task-show'>
        <h3 className='task-title' style={{fontFamily:'cursive'}}>Title</h3>
        <p>{task.title}</p>
        <h3 className='task-title' style={{fontFamily:'cursive'}}>Description</h3>
        <p>{task.taskDesc}</p>

<div>
    <button onClick={handleDeleteClick} className='task-delete'>Delete</button>
    <button className='task-edit'>Edit</button>
</div>

    </div>
  )
}

export default TaskShow