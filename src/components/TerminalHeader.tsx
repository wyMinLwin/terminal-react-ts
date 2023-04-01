import React from 'react'
import { IoTerminalOutline } from 'react-icons/io5'
import { useAppSelector } from '../store'
const TerminalHeader = () => {
  const userPrefrence = useAppSelector(state => state.userPrefrence)  
  return (
    <div className={`flex flex-row justify-start items-center p-3  rounded-t-md ${userPrefrence.theme === 'dark' ? 'bg-dark-header text-white' : 'bg-light-header text-black'}`}
    style={{borderBottomWidth:1,borderColor:'#ffffff2f'}}
    >
        <div className='sm:flex flex-row hidden' > 
            <div className="h-5 w-5 bg-red-500 rounded-full mx-1"></div>
            <div className="h-5 w-5 bg-yellow-500 rounded-full mx-1"></div>
            <div className="h-5 w-5 bg-green-500 rounded-full mx-1"></div>
        </div>
        <div className='flex flex-row mx-auto items-center'>
            <IoTerminalOutline size={24} />
            <div className='ml-2'>{userPrefrence.name} - Terminal</div>
        </div>
    </div>
  )
}

export default TerminalHeader