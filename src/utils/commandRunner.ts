import { commandCalculator } from "./commandCalculator"
import { commandLogger } from "./commandLogger"

export const commandRunnder = (command:string):string =>  {
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
        }  
        else {
            return `Command doesn't match type suii -help`
        }
    }

}

