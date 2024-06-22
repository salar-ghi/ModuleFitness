import React from 'react'
import GenderPage from './gender'
import AgePage from './age'

function Plan() {
  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4 items-center'>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Select Gender</h1>
        {/* <GenderPage /> */}
        <AgePage />
      </div>
    </div>
  )
}

export default Plan