import * as React from "react"
import { Routes, Route } from "react-router-dom"
import Box from "@mui/material/Box"
import Dashboard from "./dashboard"
import About from "./about"
import MenuDrawer from "../../components/menu"
import Header from "../../components/header"

const Auth = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false)

  const toggleDrawer = (isMenuOpen: boolean) => {
    setMenuOpen(isMenuOpen)
  }
  return (
    <>
      <Header title={"title"} onMenuClick={() => toggleDrawer(!isMenuOpen)} />
      <MenuDrawer open={isMenuOpen} toggleDrawer={(open: boolean) => toggleDrawer(open)} />
      <Box sx={{ paddingLeft: "350px" }}>
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Box>
    </>
  )
}

export default Auth
