import { commandCalculator } from "./commandCalculator"
import { commandClear } from "./commandClear";
import { commandExit } from "./commandExit";
import { commandLogger } from "./commandLogger"
import { commandThemeChange } from "./commandThemeChange";
import {commandUserNameChange} from "./commandUserNameChange"

type commandRunnderProps = {
    command:string;
    setUserName: (username:string) => void;
    setTheme: (theme:string) => void
    clearHistory: () => void
}

export const commandRunnder = ({command,setTheme,setUserName,clearHistory}:commandRunnderProps):string =>  {
    if (!command.startsWith('suii')) {
        return `Command should start with suii if you don't what to do with this terminal type 'suii -help' `
    } else {
        if (command.includes('-log')) {
            if (command.startsWith('suii -log ')) {
                return commandLogger(command)          
            } else {
                return 'Command must be suii -log <content>'
            }
        } else if (command.includes('-cal')) {
            if (command.startsWith('suii -cal ')) {
                return commandCalculator(command)          
            } else {
                return 'Command must be suii -cal <calculation>'
            }
        }  else if (command.includes('-set_username')) {
            if (command.startsWith('suii -set_username ')) {
                return commandUserNameChange(command,setUserName)     
            } else {
                return 'Command must be suii -set_username <username>'
            }
        }  else if (command.includes('-set_theme')) {
            if (command.startsWith('suii -set_theme ')) {
                return commandThemeChange(command,setTheme)    
            } else {
                return 'Command must be suii -set_theme <dark | light>'
            }
        }  else if (command.includes('-clear')) {
            if (command.startsWith('suii -clear')) {
                return commandClear(command,clearHistory)    
            } else {
                return 'Command must be suii -clear'
            }
        }  else if (command.includes('-help')) {
            if (command.startsWith('suii -help')) {
                return `-help -> show the list of available
                \n-log -> to output data eg. suii -log Hello World >> Hello World 
                \n-cal to calculate simple calculation 
                \n-set_username to change username 
                \n-set_theme to change theme dark and light 
                \n-clear to clear the console
                \n-exit to close terminal`   
            } else {
                return 'Command must be suii -help'
            }
        }  else if (command.includes('-exit')) {
            if (command.startsWith('suii -exit')) {
                return commandExit(command)    
            } else {
                return 'Command must be suii -exit'
            }
        } 
        else {
            return `Command doesn't match type suii -help`
        }
    }

}

