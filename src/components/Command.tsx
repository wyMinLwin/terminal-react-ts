import React, { useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store';
import { commandHistorySlice } from '../store/commandHistorySlice';
import { userPrefrenceSlice } from '../store/userPrefrenceSlice';
import { commandRunnder } from '../utils/commandRunner';

const Command = () => {
    const history = useAppSelector(state => state.commandHistory)
    const commandRef = useRef<HTMLInputElement>(null!)
    const [historyIndex,setHistoryIndex] = useState(history.length)
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
        if ( arrow === 'arrowdown') {
            if (historyIndex < history.length-1) {
                setCommand(prev => prev = history[historyIndex+1].command)
                setCurrentIndex(prev => prev = history[historyIndex+1].command.length)
                setHistoryIndex(prev => prev +1)
            } else if (historyIndex === history.length-1) {
                setCommand(prev => prev = '')
                setCurrentIndex(prev => prev = 0)
                setHistoryIndex(prev => prev = history.length)
                
            }
        } else if (arrow === 'arrowup'){
            setCommand(prev => prev = history[historyIndex-1].command)
            setCurrentIndex(history[historyIndex-1].command.length)
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
                if ( historyIndex < history.length) getOldCommands('arrowdown')

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
            case '_':
            case '*':
            case '/':
            case '&':
            case '+':
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
    const userName = useAppSelector(state => state.userPrefrence.name)
    const dispatch = useAppDispatch()
    const setUserName = (username:string) => {
        dispatch(userPrefrenceSlice.actions.setUserName(username))
    }
    const setTheme = (theme:string) => {
        dispatch(userPrefrenceSlice.actions.setTheme(theme))
    }
    const clearHistory = () => {
        setHistoryIndex(prev => prev = 0);
        dispatch(commandHistorySlice.actions.clearHistory())
    }
    const theme = useAppSelector(state => state.userPrefrence.theme)
  return (

    <>
    <div className='text-blue-400' onClick={() => commandRef.current.focus()}>
        @{userName} ~/Terminal <span className={`${theme === 'dark' ? 'text-light-body' : 'text-dark-body'}`}>$</span>
        <span className={`ml-2 ${theme === 'dark' ? 'text-light-body' : 'text-dark-body'}`} >
            {command.slice(0,currentIndex)}
            <form autoComplete='off'  autoCorrect={'false'} className='inline' onSubmit={e => {
                    e.preventDefault()
                    setHistoryIndex(prev => prev = history.length+1)
                    dispatch(commandHistorySlice.actions.addToHistory({command:command,result:commandRunnder({command,setUserName,setTheme,clearHistory})}))
                    setCurrentIndex(prev => prev = 0)
                    setCommand(prev => prev = '')
                    commandRef.current.value = ''
                    
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