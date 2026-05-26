import React from 'react'

const NewTask = ({ data }) => {
  return (
  <div className="shrink-0 h-full w-75 bg-blue-200 rounded-xl p-3">
<div className='flex justify-between items-center mt-5'>
    <h3 className='bg-blue-600 text-sm px-3 py-1 rounded '>{data.category}</h3>
    <h4 className='text-sm '>{data.taskDate}</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold '>{data.taskTitle}</h2>
<p className="text-sm mt-2">
    {data.taskDescription}
</p>
<div className='flex gap-3 mt-5'>
<button className='bg-green-500 text-sm text-white px-2 py-1 rounded hover:bg-green-600'>accept task</button>
</div>
</div>
  )
}

export default NewTask