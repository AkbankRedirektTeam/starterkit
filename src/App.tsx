import React from "react"
import SignInSide from "./features/login"
import initLang from "./i18n"
import "./App.css"
initLang()

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SignInSide />
      </header>
    </div>
  )
}

export default App
