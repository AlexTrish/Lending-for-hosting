import React from 'react'
import { ThemeContext, themes } from '../theme/ThemeContext'
import Toggle from '../theme/Toggle'

const Root = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
      <Toggle
        onChange={() => {
          if (theme === themes.light) setTheme(themes.dark)
          if (theme === themes.dark) setTheme(themes.light)
        }}
        value={theme === themes.dark}
      />
    )}
  </ThemeContext.Consumer>
)

export default App