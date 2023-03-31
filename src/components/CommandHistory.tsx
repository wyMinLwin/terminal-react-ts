import React from 'react'
import { PreviousCommandType } from './TerminallBody'
type CommandHistoryProps = {
    item: PreviousCommandType;
    result: string;
}
const CommandHistory = (props:CommandHistoryProps) => {
  return (
    <>
        <div className='text-blue-400'>
        @user ~/Terminal <span className='text-light-body'>$</span>
        <span className='ml-2 text-light-body' >
            {props.item.command}

                    {/* <span className='w-2 h-2 bg-blue-300' id='terminal-cursor'></span> */}
        </span>
        </div>
        <div className='text-green-600'>{`>> ${props.result}`}</div>
    </>
  )
}

export default CommandHistory