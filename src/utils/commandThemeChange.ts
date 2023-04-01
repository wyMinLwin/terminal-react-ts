export const commandThemeChange = (command:string,setTheme: (theme:string) => void):string => {
    let theme = command.slice(command.search('-set_theme ')+11)
   if (theme === 'dark' || 'light') {
    setTheme(theme)
    return `Your theme had been set to ${theme}` 
   }
   return 'You can only set dark and light theme for now'
}