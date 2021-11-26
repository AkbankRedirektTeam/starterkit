import React from "react"
import { NavLink } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Hidden from "@mui/material/Hidden"
import { Box } from "@mui/material"
import menu from "app/menu.json"

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        style={{
          alignItems: "stretch"
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              height: 32
            }}
          />
        </Box>
        <Hidden mdDown>
          <Box
            sx={{
              ml: 3,
              display: "flex",
              alignItems: "stretch",
              "& a": {
                color: "white",
                fontSize: 20,
                textDecoration: "none",
                p: 1,
                mx: 1,
                display: "flex",
                alignItems: "center",
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent"
              }
            }}
          >
            {menu.routes.map((item) => (
              <NavLink
                to={item.route}
                key={item.id}
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: "4px solid"
                      }
                    : {}
                }
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default Header
