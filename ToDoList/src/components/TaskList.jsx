import React from 'react'
import TaskShow from './TaskShow'

function TaskList({Tasks,onDelete}) {
  return (
    <div className='Task-List'>
      {Tasks.map((task)=>{
        return (
          <TaskShow key={task.id} task={task} onDelete={onDelete}/>
        )
      })}
    </div>
  )
}

export default TaskList