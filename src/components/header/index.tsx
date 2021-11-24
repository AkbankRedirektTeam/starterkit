import * as React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { useTranslation } from "react-i18next"
import { logout } from "states"
import Menu from "app/menu.json"

const Header = (props: any) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onIconClick = (event: any) => {
    props.onMenuClick && props.onMenuClick(event)
  }
  const onLogoutClick = async () => {
    await dispatch(logout())
    navigate("/")
  }
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            alignItems: "stretch"
          }}
        >
          <Link
            to="/auth/"
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: 32
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
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box component="nav" sx={{ height: "100%" }}>
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  height: "100%"
                }}
              >
                {Menu.routes.map((item) => (
                  <Box
                    key={item.id}
                    component="li"
                    sx={{
                      height: "100%",
                      "& a": {
                        color: "common.white",
                        textDecoration: "none",
                        px: 2,
                        py: 1,
                        display: "flex",
                        height: "100%",
                        alignItems: "center",
                        borderTop: "3px solid transparent",
                        borderBottom: "3px solid transparent",
                        lineHeight: 0
                      }
                    }}
                  >
                    <NavLink
                      to={item.route}
                      style={({ isActive }) =>
                        isActive
                          ? {
                              borderBottomColor: "white"
                            }
                          : {}
                      }
                    >
                      {item.text}
                    </NavLink>
                  </Box>
                ))}
              </Box>
            </Box>
          </Typography>
          <Button onClick={onLogoutClick} color="inherit">
            {t("Logout")}
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <IconButton
              onClick={onIconClick}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
