export const commandLogger = (command:string):string => {
    let logging = command.slice(command.search('-log ')+5)
    return logging
} 