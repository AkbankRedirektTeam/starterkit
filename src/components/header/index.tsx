import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
// import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

const Header = (props: any) => {
  const onIconClick = (event: any) => {
    props.onMenuClick && props.onMenuClick(event)
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
          {/*<Button color="inherit">Logout</Button>*/}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
