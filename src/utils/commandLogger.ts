export const commandLogger = (command:string):string => {
    let logging = command.slice(command.search('-log')+4)
    return logging
} 