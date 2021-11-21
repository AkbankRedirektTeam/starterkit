import * as React from "react"
import { connect } from "react-redux"
import { Routes, Route, useNavigate } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"
import Backdrop from "@mui/material/Backdrop"
import SignInSide from "./features/login"
import Auth from "./features/auth"
import initLang from "./i18n"
import "./App.css"
initLang()

const App = (props: any) => {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.token) {
      navigate("/")
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={props.loading}
        >
          <CircularProgress />
        </Backdrop>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/auth/*" element={props.token ? <Auth /> : <SignInSide />} />
        </Routes>
      </header>
    </div>
  )
}

const mapState = (state: any) => ({
  token: state.appState.token,
  loading: state.appState.loading
})

const connector = connect(mapState)

export default connector(App)
