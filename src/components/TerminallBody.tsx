import Command from './Command';
import CommandHistory from './CommandHistory';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../store';

const TerminallBody = () => {
  const theme = useAppSelector(state => state.userPrefrence.theme)
  const history = useAppSelector(state => state.commandHistory)

// &nbsp;&nbsp;
  return (
    <div className={`w-full h-full ${theme === 'dark' ? 'bg-dark-body' : 'bg-light-body'} rounded-b-md p-3 overflow-scroll`} id='terminal-body'>
        <div className='grid grid-cols-1'>
          {history.map(item => <CommandHistory key={uuidv4()} item={item} />)}
          <Command />
              
        </div>
    </div>
  )
}

export default TerminallBody