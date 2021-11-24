import * as React from "react"
import { connect } from "react-redux"
import { Routes, Route, useNavigate } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"
import CircularProgress from "@mui/material/CircularProgress"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import { ThemeProvider } from "@mui/material/styles"
import SignInSide from "features/login"
import Auth from "features/auth"
import initLang from "i18n"
import themeLight from "themes/light"
import "./App.css"

initLang()

interface Props {
  loading?: boolean
  token?: string
}

const App = (props: Props) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!props.token) {
      navigate("/")
    }
  }, [navigate, props.token])

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Box className="App">
        <Box component="header" className="App-header">
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.loading || false}
          >
            <CircularProgress />
          </Backdrop>
          <Routes>
            <Route path="/" element={<SignInSide />} />
            <Route path="/auth/*" element={props.token ? <Auth /> : <SignInSide />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

const mapState = (state: any) => ({
  token: state.appState.token,
  loading: state.appState.loading
})

const connector = connect(mapState)

export default connector(App)
