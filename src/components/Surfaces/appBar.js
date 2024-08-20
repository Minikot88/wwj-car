import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import logo1 from "../Photo/logo2.png";

const styles = {
  my: 2,
  color: "#FFFFFF",
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".1rem",
  backgroundColor: '#000000',
  borderRadius: 1,
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: '#000000',
    transform: 'scale(1.15)',
  },
  '&:focus': {
    outline: 'none',
  },
};

export default function ResponsiveAppBar() {

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ bottom: open });
  };

  const list = () => (
    <Box
      sx={{
        bgcolor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
        height: '100%', // Ensure it takes full height of the Drawer
      }}
    >
      <List sx={{ width: '100%' }}>
        <ListItem disablePadding>
          <ListItemButton
            href="/"
            sx={{
              mb: '10px',
              width: '100%',
              textAlign: 'center',
              fontSize: '16px',
              justifyContent: 'center',
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: '#FF0000',
              transition: 'background-color 0.3s, transform 0.3s',
              '&:hover': {
                backgroundColor: '#FF0000',
                color: '#FFFFFF'
              },
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            หน้าหลัก
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            href="/Condition"
            sx={{
              mb: '10px',
              width: '100%',
              textAlign: 'center',
              fontSize: '16px',
              justifyContent: 'center',
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: '#FF0000',
              transition: 'background-color 0.3s, transform 0.3s',
              '&:hover': {
                backgroundColor: '#FF0000',
                color: '#FFFFFF'
              },
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            เงื่อนไขการเช่ารถ
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{
              mb: '10px',
              width: '100%',
              textAlign: 'center',
              fontSize: '16px',
              justifyContent: 'center',
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: '#FF0000',
              transition: 'background-color 0.3s, transform 0.3s',
              '&:hover': {
                backgroundColor: '#FF0000',
                color: '#FFFFFF'
              },
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            วิธีการเช่ารถ
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{
              mb: '10px',
              width: '100%',
              textAlign: 'center',
              fontSize: '16px',
              justifyContent: 'center',
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: '#FF0000',
              transition: 'background-color 0.3s, transform 0.3s',
              '&:hover': {
                backgroundColor: '#FF0000',
                color: '#FFFFFF'
              },
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            ติดต่อเรา
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
              onClick={toggleDrawer(true)}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <div>
              <Drawer
                anchor="bottom"
                open={state.bottom}
                onClose={toggleDrawer(false)}
              >
                {list()}
              </Drawer>
            </div>

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
            <Button sx={styles} href="/" >
              {" "} หน้าหลัก {" "}
            </Button>
            <Button sx={styles} href="/Condition" >
              {" "} เงื่อนไขการเช่ารถ {" "}
            </Button>
            <Button sx={styles} href="/" >
              {" "} วิธีการเช่ารถ {" "}
            </Button>
            <Button sx={styles} href="/">
              {" "} ติดต่อเรา {" "}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                <NotificationsIcon
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