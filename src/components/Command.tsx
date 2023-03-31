import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { commandRunnder } from '../utils/commandRunner';
import { PreviousCommandType } from './TerminallBody'

type CommandProps = {
    setPreviousCommand ?: (commandVal:string,commandResult:string) => void;
    previousCommand: PreviousCommandType[];
}

const Command = (props:CommandProps) => {
    const commandRef = useRef<HTMLInputElement>(null!)
    const [historyIndex,setHistoryIndex] = useState(props.previousCommand.length)
    const [command,setCommand] = useState('')
    const [currentIndex,setCurrentIndex] = useState(command.length)
   
    const writeCommand = (input:string) => {
        setCommand(prev => prev = command.slice(0,currentIndex) + input + command.slice(currentIndex))
        setCurrentIndex(prev => prev+1)
    }

    const deleteCommand = () => {
        setCommand(prev => prev = command.slice(0,currentIndex-1) + command.slice(currentIndex))
        setCurrentIndex(prev => prev-1)
    }

    const getOldCommands = (arrow:'arrowdown'|'arrowup') => {
        console.log('w')
        if ( arrow === 'arrowdown') {
            if (historyIndex < props.previousCommand.length-1) {
                setCommand(prev => prev = props.previousCommand[historyIndex+1].command)
                setCurrentIndex(prev => prev = props.previousCommand[historyIndex+1].command.length)
                setHistoryIndex(prev => prev +1)
            } else if (historyIndex === props.previousCommand.length-1) {
                setCommand(prev => prev = '')
                setCurrentIndex(prev => prev = command.length)
                setHistoryIndex(prev => prev = props.previousCommand.length)
                
            }
        } else if (arrow === 'arrowup'){
            setCommand(prev => prev = props.previousCommand[historyIndex-1].command)
            setCurrentIndex(props.previousCommand[historyIndex-1].command.length)
            setHistoryIndex(prev => prev -1)
        }
    }

    const onKeyDown = (e:React.KeyboardEvent) => {
        switch (e.key.toLocaleLowerCase()) {
            case 'arrowleft':
                if (currentIndex > 0 ) setCurrentIndex(prev => prev - 1)
                return
            case 'arrowright': 
                if (currentIndex < command.length) setCurrentIndex(prev => prev + 1)
                return
            case 'arrowup' : 
               if (historyIndex > 0)  getOldCommands('arrowup')

                return
            case 'arrowdown' : 
                if ( historyIndex < props.previousCommand.length) getOldCommands('arrowdown')

                return
            case 'backspace' : 
                deleteCommand()
                return
            case 'a': 
            case 'b': 
            case 'c': 
            case 'd': 
            case 'e': 
            case 'f': 
            case 'g': 
            case 'h': 
            case 'i': 
            case 'j': 
            case 'k': 
            case 'l': 
            case 'm': 
            case 'n': 
            case 'o': 
            case 'p': 
            case 'q': 
            case 'r': 
            case 's': 
            case 't': 
            case 'u': 
            case 'v': 
            case 'w': 
            case 'x': 
            case 'y': 
            case 'z': 
            case '-':
            case '*':
            case '/':
            case '&':
            case '&':
            case ' ':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            writeCommand(e.key)
                return
        
        }
    }
  return (
    <>
    <div className='text-blue-400'>
        @user ~/Terminal <span className='text-light-body'>$</span>
        <span className='ml-2 text-light-body' >
            {command.slice(0,currentIndex)}
            <form autoComplete='off'  autoCorrect={'false'} className='inline' onSubmit={e => {
                    e.preventDefault()
                    if (props.setPreviousCommand) {
                        props.setPreviousCommand(command,commandRunnder(command))
                    }
                    setCurrentIndex(prev => prev = 0)
                    setCommand(prev => prev = '')
                    commandRef.current.value = ''
                    setHistoryIndex(prev => prev+1)
                    
            }}>
                <input autoFocus={true} id='terminal-cursor' 
                    ref={commandRef}
                    className='w-1 h-full focus:outline-none text-transparent bg-blue-400' 
                    onKeyDown={(e) => onKeyDown(e)} 
                />
            </form>
            {command.slice(currentIndex)}
            </span>
        </div>
    </>
  )
}

export default Command