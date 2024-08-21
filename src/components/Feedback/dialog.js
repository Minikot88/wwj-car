import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import gif1 from "../Photo/gif.gif";
import gif2 from "../Photo/gif2.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSlide() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullScreen={isMobile}
        maxWidth="xl"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxWidth: isMobile ? "95%" : "95%", // Set custom max width for desktop
            height: isMobile ? "80vh" : "auto",  // Custom height when fullScreen
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            padding: 0,
            margin: isMobile ? "10vh 0" : "auto", // Center vertically on mobile
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: '#000000',
            zIndex: 1, // Ensure the button appears above the image
          }}
        >
          <CloseIcon />
        </IconButton>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={isMobile ? gif2 : gif1} // Conditionally render based on screen size
            alt="Icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </Dialog>
    </React.Fragment>
  );
}
