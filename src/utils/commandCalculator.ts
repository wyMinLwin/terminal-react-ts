export const commandCalculator = (command:string):string => {
    let toCal = command.slice(command.search('-cal ')+4)
    toCal = eval(toCal)
    return toCal
}