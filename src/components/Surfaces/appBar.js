import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import NotificationsIcon from "@mui/icons-material/Notifications";

import logo1 from "../Photo/logo2.png";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              marginRight: 1,
              width: 80,
              height: 80,
              cursor: "pointer",
            }}
          >
            <img
              src={logo1}
              alt="Icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WWJ
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center" href="/">
                  หน้าหลัก
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center">เงื่อนไขการเช่ารถ</Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center">วิธีการเช่ารถ</Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center">ติดต่อเรา</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              marginRight: 1,
              width: 80,
              height: 80,
              cursor: "pointer",
            }}
          >
            <img
              src={logo1}
              alt="Icon"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WWJ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              {" "}
              หน้าหลัก{" "}
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              {" "}
              เงื่อนไขการเช่ารถ{" "}
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              {" "}
              วิธีการเช่ารถ{" "}
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              {" "}
              ติดต่อเรา{" "}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <NotificationsIcon
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{ color: "#FFFFFF" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
