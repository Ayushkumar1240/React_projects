import React, { useState } from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionalContextComponent from './FunctionalContextComponent'

export const ThemeContext = React.createContext()

const Comp1UseContext = () => {
    const [darkTheme, setDarkTheme] = useState(true)
    
    function toggleTheme() {
        setDarkTheme(prevTheme => !prevTheme)
    }
  return (
      <div>
          <ThemeContext.Provider value={darkTheme}>
              <button onClick={toggleTheme}>Change Theme</button>
              <ClassContextComponent />
              <FunctionalContextComponent />
          </ThemeContext.Provider>
    </div>
  )
}

export default Comp1UseContext