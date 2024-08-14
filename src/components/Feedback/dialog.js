import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import gif from "../Photo/gif.gif";
import { Button } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSlide() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment onClose={handleClose} >
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl" // กำหนดขนาดให้เป็น small (xs, sm, md, lg, xl)
        fullWidth // กำหนดให้เต็มความกว้างของ container
        sx={{
          // กำหนดขนาดที่ต้องการ
          "& .MuiDialog-paper": {
            width: "100%", // กำหนดความกว้าง
            maxWidth: "100%",
          },
        }}
      >
        <div onClose={handleClose}
          style={{
            
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img onClose={handleClose}
            src={gif}
            alt="Icon"
            style={{
              width: "100%", // กำหนดความกว้าง 90% ของ container
              height: "auto", // กำหนดความสูง 90% ของ container
              objectFit: "contain",
            }}
          />
        </div>

      </Dialog>
    </React.Fragment>
  );
}
