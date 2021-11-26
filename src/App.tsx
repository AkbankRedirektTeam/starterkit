import * as React from "react"
import { Route, Routes } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import SignInSide from "features/login"
import Auth from "features/auth"
import initLang from "i18n"
import "./App.css"

const theme = createTheme()
initLang()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <Box component="header" className="App-header">
          <Routes>
            <Route path="/" element={<SignInSide />} />
            <Route path="/auth/" element={<Auth />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
