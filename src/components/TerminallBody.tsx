import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Command from './Command';
import CommandHistory from './CommandHistory';
import { v4 as uuidv4 } from 'uuid';

export type PreviousCommandType = {
  command:string;
  result: string;
}

const TerminallBody = () => {

  const [previousCommand,setPreviousCommand] = useState<PreviousCommandType[]>([])

// &nbsp;&nbsp;
  return (
    <div className='w-full h-full bg-dark-body rounded-b-md p-3 overflow-scroll' id='terminal-body'>
        <div className='grid grid-cols-1'>
          {previousCommand.map(item => <CommandHistory result={item.result} key={uuidv4()} item={item} />)}
          <Command previousCommand={previousCommand} setPreviousCommand = {(commandVal:string,commandResult:string) => setPreviousCommand(prev => ([...prev,{command:commandVal,result:commandResult}]))} />
              
        </div>
    </div>
  )
}

export default TerminallBody