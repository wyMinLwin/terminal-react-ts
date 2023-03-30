import React from 'react'
import { IoTerminalOutline } from 'react-icons/io5'
const TerminalHeader = () => {
  return (
    <div className='flex flex-row justify-start items-center p-3  rounded-t-md bg-dark-header text-white'
    style={{borderBottomWidth:1,borderColor:'#ffffff2f'}}
    >
        <div className='sm:flex flex-row hidden' > 
            <div className="h-5 w-5 bg-red-500 rounded-full mx-1"></div>
            <div className="h-5 w-5 bg-yellow-500 rounded-full mx-1"></div>
            <div className="h-5 w-5 bg-green-500 rounded-full mx-1"></div>
        </div>
        <div className='flex flex-row mx-auto items-center'>
            <IoTerminalOutline size={24} />
            <div className='ml-2'>User - Terminal</div>
        </div>
    </div>
  )
}

export default TerminalHeader