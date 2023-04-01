export const commandClear = (command:string,clearHistory: () => void):string => {
    let clear = command.slice(command.search('-clear'))
    if (clear === '-clear') {
        clearHistory()
        return ''
    }
    return 'Command must be suii -clear' 
} 