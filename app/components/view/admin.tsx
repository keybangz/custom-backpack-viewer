import React from 'react'
import Link from 'next/link';

const AdminPanel = () => {
  return (
    <div className="flex flex-col text-white items-center font-mono justify-items-center w-screen">
      <div className="flex items-center justify-items-center align-middle mt-10">
        <Link href="/gameservers" className="text-3xl p-10 bg-[#6a4535] rounded-lg hover:bg-[#462d26] ">Manage Gameservers</Link>
      </div>
    </div>
  )
}

export default AdminPanel