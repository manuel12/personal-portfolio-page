import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";

import "./styles.css";

const Navbar = () => {
  const pages = ["about", "skills", "projects", "contact"];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar className="navbar">
        <Container maxWidth="lg">
          <Toolbar className="toolbar" disableGutters>
            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <IconButton size="small" onClick={handleOpenNavMenu}>
                <MenuIcon sx={{ fontSize: 36 }} className="hamburger-button" />
              </IconButton>

              <Menu
                className="hamburger-menu"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <a href={`#${page}`}>
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      className="navbar-menu-item"
                      dense
                    >
                      <Typography textalign="left" variant="h5">
                        {page}
                      </Typography>
                    </MenuItem>
                  </a>
                ))}
              </Menu>
            </Box>
            <Box
              className="navbar-buttons-container"
              sx={{
                display: {
                  xs: "none",
                  md: "inherit",
                },
              }}
            >
              {pages.map((page) => {
                return (
                  <a href={`#${page}`} key={page} className="navbar-link">
                    <Button className="navbar-button" variant="outlined">
                      {page}
                    </Button>
                  </a>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
