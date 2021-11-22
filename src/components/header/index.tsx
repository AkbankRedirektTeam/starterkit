import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { useTranslation } from "react-i18next"
import { hideLoading, logout } from "../../states"

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
    dispatch(hideLoading())
  }
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={onIconClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <Button onClick={onLogoutClick} color="inherit">
            {t("Logout")}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
