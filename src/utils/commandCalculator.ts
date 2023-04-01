export const commandCalculator = (command:string):string => {
    let toCal = command.slice(command.search('-cal ')+5)
    toCal = String(eval(toCal))
   if (toCal.includes('.')) {
        return toCal = Number(eval(toCal)).toFixed(2)
    }
    return toCal
}