import React from 'react'
import TaskShow from './TaskShow'

function TaskList({Tasks,onDelete,onUpdate}) {
  return (
    <div className='Task-List'>
      {Tasks.map((task)=>{
        return (
          <TaskShow key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
        )
      })}
    </div>
  )
}

export default TaskList