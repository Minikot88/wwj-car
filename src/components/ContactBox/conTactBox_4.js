import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

import line from "../Photo/line2.png";

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

export default function ContactBox4() {
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
            width: "55%",
            height: "55%",
          }}
        >
          <img
            src={line}
            alt="Icon"
            style={{
              width: "55%",
              height: "55%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
      <Typography sx={sx2}> @WWJCAR </Typography>
    </Container>
  );
}
