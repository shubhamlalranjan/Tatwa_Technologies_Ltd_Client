import React from "react";
import { Box, Drawer, Hidden } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import DrawerMenuList from "./DrawerMenuList";
import { Link } from "react-router-dom";

export default function SideNav({ classes, mobileOpen, handleDrawerToggle }) {
  const drawer = (
    <Box p={1}>
      <Box mb={2}>
        <Link to='/'>
          <IconButton>
            <KeyboardBackspaceIcon color='error' />
          </IconButton>
        </Link>
      </Box>
      <DrawerMenuList />
    </Box>
  );

  return (
    <nav className={classes.drawer} aria-label='mailbox folders'>
      {/* Drawer For Mobile Devices */}
      <Hidden smUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {drawer}
        </Drawer>
      </Hidden>
      {/* Drawer For Devices With Width Greter than 600px */}
      <Hidden xsDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}
