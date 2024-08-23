import * as React from "react";
import { useLocation } from "react-router-dom"; // Import hook สำหรับ React Router
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import logo1 from "../Photo/logo8.png";

const styles = (isActive) => ({
  p: 1,
  my: 2,
  color: isActive ? "#FF0000" : "#000000", // เปลี่ยนสีตามสถานะ active
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".1rem",
  borderRadius: 1,
  textShadow: isActive
    ? "0px 4px 15px rgba(0, 0, 0, 0.3)"
    : "0px 4px 15px rgba(0, 0, 0, 0.3)", // เพิ่มเงาเมื่อ active
  transition: "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.15)",
  },
  "&:focus": {
    outline: "none",
  },
});

const styles2 = (isActive) => ({
  p: 1,
  my: 2,
  color: isActive ? "#FF0000" : "#000000",
  fontFamily: "monospace",
  fontWeight: 700,
  textShadow: isActive
    ? "0px 4px 15px rgba(0, 0, 0, 0.3)"
    : "0px 4px 15px rgba(0, 0, 0, 0.3)",
  textAlign: "center",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export default function ResponsiveAppBar() {
  const location = useLocation();

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ bottom: open });
  };

  const list = () => (
    <Box
      sx={{
        bgcolor: "#ebebeb",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <List sx={{ width: "100%" }}>
        <ListItem disablePadding>
          <ListItemButton href="/" sx={styles2(location.pathname === "/")}>
            หน้าหลัก
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            href="/Condition"
            sx={styles2(location.pathname === "/Condition")}
          >
            เงื่อนไขการเช่ารถ
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            href="/HowToRent"
            sx={styles2(location.pathname === "/HowToRent")}
          >
            วิธีการเช่ารถ
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            href="/Contact"
            sx={styles2(location.pathname === "/Contact")}
          >
            ติดต่อเรา
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "#FFFFFF" }}>
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ color: "#000000" }}
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

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#FF0000",
              textDecoration: "none",
            }}
          >
            WWJ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="text"
              sx={styles(location.pathname === "/")}
              href="/"
            >
              หน้าหลัก
            </Button>
            <Button
              variant="text"
              sx={styles(location.pathname === "/Condition")}
              href="/Condition"
            >
              เงื่อนไขการเช่ารถ
            </Button>
            <Button
              variant="text"
              sx={styles(location.pathname === "/HowToRent")}
              href="/HowToRent"
            >
              วิธีการเช่ารถ
            </Button>
            <Button
              variant="text"
              sx={styles(location.pathname === "/Contact")}
              href="/Contact"
            >
              ติดต่อเรา
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                <NotificationsIcon sx={{ color: "#000000" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
