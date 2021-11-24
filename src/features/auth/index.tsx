import * as React from "react"
import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import Box from "@mui/material/Box"
import Dashboard from "./dashboard"
import About from "./about"
import Vision from "./vision"
import Committees from "./committees"
import MenuDrawer from "components/menu"
import Header from "components/header"
import Copyright from "components/copyright"

const Auth = () => {
  const headerTitle = useSelector((s: any) => s.appState.headerTitle)

  const [isMenuOpen, setMenuOpen] = React.useState(false)
  const toggleDrawer = (isMenuOpen: boolean) => {
    setMenuOpen(isMenuOpen)
  }
  return (
    <>
      <Header title={headerTitle} onMenuClick={() => toggleDrawer(!isMenuOpen)} />
      <MenuDrawer open={isMenuOpen} toggleDrawer={(open: boolean) => toggleDrawer(open)} />
      <Box sx={{ paddingLeft: "350px", flex: 1 }}>
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="vision" element={<Vision />} />
          <Route path="committees" element={<Committees />} />
        </Routes>
      </Box>
      <Copyright />
    </>
  )
}

export default Auth
