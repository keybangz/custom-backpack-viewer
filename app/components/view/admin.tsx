import React from 'react'

const AdminPanel = () => {
  return (
    <div className="flex flex-col text-white items-center font-mono">
      <div className="flex items-center justify-items-center align-middle mt-10">
        <button className="text-3xl p-10 bg-[#6a4535] rounded-lg hover:bg-[#462d26] ">Manage Gameservers</button>

        <div className="flex items-center ">
          <button className="text-3xl ml-20 p-10 bg-[#6a4535] rounded-lg hover:bg-[#462d26] ">Backpack</button>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel