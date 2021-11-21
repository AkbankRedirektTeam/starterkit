import * as React from "react"
import { Link } from "react-router-dom"
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
import Menu from "../../app/menu.json"

const MenuDrawer = (props: any) => {
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
      sx={{ width: "250px" }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List sx={{ paddingTop: "60px" }}>
        {Menu.routes.map((item) => (
          <Link key={item.id} to={item.route}>
            <ListItem button>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  )
}

export default MenuDrawer
