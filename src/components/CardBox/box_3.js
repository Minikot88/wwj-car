import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

import gif from "../Photo/gif.gif";

export default function Box3() {
  return (
    <Container maxWidth="mg">
      <Box
        sx={{
          mt: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "20%",
            opacity: 0,
            animation: "fadeIn 2s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(-20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
            transition: "transform 0.3s ease-in-out", // สำหรับ hover effect
            "&:hover": {
              transform: "scale(1.1)", // ขยายภาพเมื่อ hover
            },
          }}
        >
          <img
            src={gif}
            alt="Icon"
            style={{
              width: "70%", // กำหนดความกว้าง 90% ของ container
              height: "auto", // กำหนดความสูง 90% ของ container
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
