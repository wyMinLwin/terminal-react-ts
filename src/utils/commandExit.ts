export const commandExit = (command:string):string => {
    let clear = command.slice(command.search('-exit'))
    if (clear === '-exit') {
        window.close()
        return ''
    }
    return 'Command must be suii -exit' 
} 