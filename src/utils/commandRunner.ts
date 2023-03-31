export const commandRunnder = (command:string):string =>  {
    if (command.startsWith('suii')) {
        if (command.includes('suii -log')) {
            let logging = command.slice(command.search('-log')+4)
            return logging
        }
        return 'Suiii'
    }
    return `Command should start with suii if you don't what to do with this terminal type 'suii -help' `
}

