import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext) ;
  console.log(authData) ;
  return (
    <div className="bg-linear-to-br from-indigo-900 to-slate-900 p-8 rounded-xl mt-8 shadow-lg min-h-80">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m6 5.87v-2a4 4 0 0 0-3-3.87m6 5.87v-2a4 4 0 0 1 3-3.87M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
        All Employees Task Overview
      </h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-200">
          <thead className="bg-indigo-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Employee</th>
              <th className="px-4 py-3 font-semibold">New</th>
              <th className="px-4 py-3 font-semibold">Active</th>
              <th className="px-4 py-3 font-semibold">Completed</th>
              <th className="px-4 py-3 font-semibold">Failed</th>
            </tr>
          </thead>
          <tbody className="bg-slate-800 divide-y divide-slate-700">
            {authData.employees.map((employee, idx) => (
              <tr key={idx} className="hover:bg-indigo-900 transition">
                <td className="flex items-center gap-3 px-4 py-2">
                  <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold shadow-md">
                    {employee.firstName ? employee.firstName[0].toUpperCase() : '?'}
                  </div>
                  <span className="font-medium text-white">{employee.firstName}</span>
                </td>
                <td className="px-4 py-2 text-indigo-300 font-semibold">{employee.taskCounts.newTask}</td>
                <td className="px-4 py-2 text-yellow-300 font-semibold">{employee.taskCounts.active}</td>
                <td className="px-4 py-2 text-emerald-400 font-semibold">{employee.taskCounts.completed}</td>
                <td className="px-4 py-2 text-rose-400 font-semibold">{employee.taskCounts.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTask