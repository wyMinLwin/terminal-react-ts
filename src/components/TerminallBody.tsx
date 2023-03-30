import React, { useState } from 'react'

const TerminallBody = () => {
  const [command,setCommand] = useState('')
  
  return (
    <div className='w-full h-full bg-dark-body rounded-b-md p-3 overflow-scroll'>
        <div className='grid grid-cols-1'>
            <div className='text-blue-400'>
                @user ~/Terminal <span className='text-light-body'>$</span>
            <span className='ml-2 text-light-body' >{command}<input autoFocus={true} className='w-2 h-full bg-blue-400 text-transparent focus:outline-none' onChange={(e) => setCommand(prev => prev = e.target.value)}/></span>
            </div>
            
        </div>
    </div>
  )
}

export default TerminallBody