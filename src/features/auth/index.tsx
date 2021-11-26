import * as React from "react"
import { Route, Routes } from "react-router-dom"
import Box from "@mui/material/Box"
import Dashboard from "./dashboard"
import About from "./about"
import Vision from "./vision"
import Committees from "./committees"
import Copyright from "components/copyright"

const Auth = () => {
  return (
    <>
      <Box sx={{ flex: 1, px: 3, pb: 3, textAlign: "left" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
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
