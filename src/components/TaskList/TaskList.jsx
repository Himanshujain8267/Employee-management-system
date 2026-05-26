import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='flex items-center gap-6 flex-nowrap justify-start mt-10 py-5 h-[55%] w-full overflow-x-auto '>
{data.tasks.map((task,idx) => {
  if(task.newTask ) {
    return <NewTask key={idx} data={task} /> 
  }
    else if(task.active) {
      return <AcceptTask key={idx} data={task} />
    }
    else if(task.completed) {
      return <CompleteTask key={idx} data={task} />
    }
    else if(task.failed) {
      return <FailedTask key={idx} data={task} />
    }
})}
    </div>

  )
}

export default TaskList