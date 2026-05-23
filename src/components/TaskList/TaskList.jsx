import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex items-center gap-6 flex-nowrap justify-start mt-10 py-5 h-[55%] w-full overflow-x-auto '>

<div className="shrink-0 h-full w-75 bg-red-200 rounded-xl p-3">
<div className='flex justify-between items-center mt-5'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
    <h4 className='text-sm '>20</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold '>make a youtube video</h2>
<p className="text-sm mt-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim sint quos fugiat, rerum pariatur.
</p>
</div>
<div className="shrink-0 h-full w-75 bg-green-200 rounded-xl p-3">
<div className='flex justify-between items-center mt-5'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
    <h4 className='text-sm '>20</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold '>make a youtube video</h2>
<p className="text-sm mt-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim sint quos fugiat, rerum pariatur.
</p>
</div>
<div className="shrink-0 h-full w-75 bg-blue-200 rounded-xl p-3">
<div className='flex justify-between items-center mt-5'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
    <h4 className='text-sm '>20</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold '>make a youtube video</h2>
<p className="text-sm mt-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim sint quos fugiat, rerum pariatur.
</p>
</div>
    </div>
  )
}

export default TaskList