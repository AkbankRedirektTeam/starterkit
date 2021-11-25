import * as React from "react"
import { Routes, Route } from "react-router-dom"
import SignInSide from "./features/login"
import initLang from "./i18n"
import "./App.css"

initLang()

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInSide />} />
      </Routes>
    </div>
  )
}

export default App
