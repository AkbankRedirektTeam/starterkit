import * as React from "react"
import { Routes, Route } from "react-router-dom"
import SignInSide from "./features/login"
import Auth from "./features/auth"
import initLang from "./i18n"
import "./App.css"
initLang()

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
