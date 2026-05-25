import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = ({ data }) => {
  return (
    <div className="min-h-screen w-full bg-linear-to-br bg-[#1c1c1c] p-10">
      <Header data={data} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard