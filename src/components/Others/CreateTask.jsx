import React from 'react'

const CreateTask = () => {
  return (
    <div className="flex justify-center  py-10 bg-[#1c1c1c]">
      <div className="bg-[#23272f] rounded-xl shadow-lg p-10 w-full max-w-6xl border border-[#444857]">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-5">
            <div>
              <label className="block text-gray-200 font-semibold mb-1">Task Title</label>
              <input type="text" placeholder="Make a UI design" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee7474] bg-gray-800 text-white placeholder-gray-400" />
            </div>
            <div>
              <label className="block text-gray-200 font-semibold mb-1">Date</label>
              <input type="date" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee7474] bg-gray-800 text-white" />
            </div>
            <div>
              <label className="block text-gray-200 font-semibold mb-1">Assign to</label>
              <input type="text" placeholder="employee name" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee7474] bg-gray-800 text-white placeholder-gray-400" />
            </div>
            <div>
              <label className="block text-gray-200 font-semibold mb-1">Category</label>
              <input type="text" placeholder="design, dev, etc" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee7474] bg-gray-800 text-white placeholder-gray-400" />
            </div>
          </div>
          <div className="flex flex-col h-full">
            <label className="block text-gray-200 font-semibold mb-1">Description</label>
            <textarea rows="7" placeholder="Description" className="flex-1 w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee7474] resize-none bg-gray-800 text-white placeholder-gray-400 mb-4"></textarea>
            <button type="submit" className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 rounded shadow transition-colors duration-200 mt-auto">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask