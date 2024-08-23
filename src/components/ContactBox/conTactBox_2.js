import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

import phone from "../Photo/phone2.png";

const sx2 = {
  mt: "20px",
  color: "#000000",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  width: "100%",
  fontSize: {
    xs: "15px",
    sm: "16px",
    md: "18px",
    lg: "21px",
    xl: "22px",
  },
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  animation: "fadeInLeft 4s ease-in-out forwards",
  animationDelay: "1s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
};

export default function ContactBox2() {
  return (
    <Container maxWidth="100%">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "50%",
          }}
        >
          <img
            src={phone}
            alt="Icon"
            style={{
              width: "50%",
              height: "50%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
      <Typography sx={sx2}> 06 3101 9403 </Typography>
    </Container>
  );
}
