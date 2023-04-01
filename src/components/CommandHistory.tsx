import React from 'react'
import { useAppSelector } from '../store';
import { CommandHistoryType } from '../store/commandHistorySlice';
type CommandHistoryProps = {
    item: CommandHistoryType;
}
const CommandHistory = (props:CommandHistoryProps) => {
  const userPrefremce = useAppSelector(state => state.userPrefrence)
  const splitedResult = props.item.result.split('\n')
  return (
    <>
        <div className='text-blue-400'>
        @{userPrefremce.name} ~/Terminal <span className={`${userPrefremce.theme === 'dark' ? 'text-light-body' : 'text-dark-body'}`}>$</span>
        <span className={`ml-2 ${ userPrefremce.theme === 'dark' ?'text-light-body' : 'text-dark-body'}`} >
            {props.item.command}
        </span>
        </div>
        {/* <div className='text-green-600'>{`>> ${props.item.result}`}</div> */}
        {splitedResult.map(e => <div className='text-green-600'>{'>> '+ e}</div>)}
    </>
  )
}

export default CommandHistory