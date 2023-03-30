import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'

const TerminallBody = () => {

  const [command,setCommand] = useState('')
  const [currentIndex,setCurrentIndex] = useState(command.length)
  
  const writeCommand = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > currentIndex) {
      setCurrentIndex(prev => prev+1)
    } else {
      setCurrentIndex(prev => prev-1)
    }
    setCommand(prev => prev = e.target.value)
  }
  
  const changeIndex = (e:React.KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowLeft':
          if (currentIndex > 0 ) setCurrentIndex(prev => prev - 1)
          return
        case 'ArrowRight': 
          if (currentIndex < command.length) setCurrentIndex(prev => prev + 1)
          return
      }
  }

// &nbsp;&nbsp;
  return (
    <div className='w-full h-full bg-dark-body rounded-b-md p-3 overflow-scroll' id='terminal-body'>
        <div className='grid grid-cols-1'>
            <div className='text-blue-400'>
                @user ~/Terminal <span className='text-light-body'>$</span>
            <span className='ml-2 text-light-body' >
              {command.slice(0,currentIndex)}
              <input autoFocus={true} id='terminal-cursor' className='w-1 h-full focus:outline-none text-transparent bg-blue-400 ' onKeyDown={e => changeIndex(e)} onChange={(e) => writeCommand(e)}/>
              {/* <span className='w-2 h-2 bg-blue-300' id='terminal-cursor'></span> */}
              {command.slice(currentIndex)}
            </span>
            </div>    
        </div>
    </div>
  )
}

export default TerminallBody