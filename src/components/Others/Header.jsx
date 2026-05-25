import React from 'react'


const Header = ({ name }) => {
  return (
   <div className="flex item-end justify-between text-white ">
<h1 className='text-2xl '>Hello, <br/> <span className='font-bold' > {name}</span></h1>
<button className='cursor-pointer bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-md h-10'>Log Out</button>



   </div>
  );
}

export default Header