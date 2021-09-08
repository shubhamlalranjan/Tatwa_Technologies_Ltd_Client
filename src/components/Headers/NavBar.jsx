import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function NavBar({ classes, handleDrawerToggle }) {
  return (
    <div>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Tatwa Technologies Ltd.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
