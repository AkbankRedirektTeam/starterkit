import * as React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
// import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
// import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
// import InboxIcon from "@mui/icons-material/MoveToInbox"
// import MailIcon from "@mui/icons-material/Mail"
import Menu from "app/menu.json"
import Copyright from "components/copyright"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { logout } from "../../states"

const MenuDrawer = (props: any) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onLogoutClick = async () => {
    await dispatch(logout())
    navigate("/")
  }

  const [open, setOpen] = React.useState(props.open ? props.open : false)
  React.useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  const toggleDrawer = (open: boolean) => {
    setOpen(open)
    props.toggleDrawer && props.toggleDrawer()
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          px: 3,
          py: 1,
          height: 64,
          display: "flex",
          alignItems: "center"
        }}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="Logo"
          sx={{
            width: "100%"
          }}
        />
      </Box>
      <List sx={{ py: 2.5 }}>
        {Menu.routes.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              padding: 0,
              "& a": {
                textDecoration: "none",
                color: "primary.main",
                display: "flex",
                width: "100%",
                px: 3,
                py: 1.5
              }
            }}
          >
            <NavLink to={item.route}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={item.text} />
            </NavLink>
          </ListItem>
        ))}
        <ListItem
          button
          onClick={onLogoutClick}
          color="inherit"
          sx={{
            ml: "auto",
            mt: 1,
            px: 3,
            color: "red"
          }}
        >
          {t("Logout")}
        </ListItem>
      </List>
      <Divider />
      <Copyright
        sx={{
          mt: 3
        }}
      />
    </Box>
  )

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  )
}

export default MenuDrawer
