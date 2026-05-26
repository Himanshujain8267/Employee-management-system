import React from 'react'

const CompleteTask = ({ data }) => {
  return (
      <div className="shrink-0 h-full w-75 bg-green-200 rounded-xl p-3">
<div className='flex justify-between items-center mt-5'>
    <h3 className='bg-green-600 text-sm px-3 py-1 rounded '>{data.category}</h3>
    <h4 className='text-sm '>{data.taskDate}</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold '>{data.taskTitle}</h2>
<p className="text-sm mt-2">
{data.taskDescription}
</p>
<div className='flex gap-3 mt-2'>
<button className='w-full bg-green-500 text-sm text-white px-2 py-1 rounded hover:bg-green-600'>completed</button>
</div>
</div>
  )
}

export default CompleteTask