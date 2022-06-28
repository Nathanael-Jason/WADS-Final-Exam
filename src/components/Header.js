import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#494036" }} position="sticky">
        <Toolbar>
          <Typography>
            <img
              src="https://i.ibb.co/d7YVw6s/mrxcoffee.png"
              height="50px"
              width="50px"
            />
          </Typography>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/" label="Home" />
            <Tab LinkComponent={NavLink} to="/products" label="Products" />
            <Tab LinkComponent={NavLink} to="/sale" label="Sale" />
            <Tab LinkComponent={NavLink} to="/feedback" label="Feedback" />
            <Tab LinkComponent={NavLink} to="/login" label="Login" />
            <Tab LinkComponent={NavLink} to="/account" label="Account" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
