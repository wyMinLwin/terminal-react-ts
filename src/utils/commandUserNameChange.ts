export const commandUserNameChange = (command:string,setUserName: (username:string) => void):string => {
    let username = command.slice(command.search('-set_username ')+14)
    setUserName(username)
    return `Your username had been set to ${username}` 
}