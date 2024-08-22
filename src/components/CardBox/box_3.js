import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

import gif from "../Photo/cargif2.gif";

export default function Box3() {
  return (
    <Container maxWidth="l">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
          }}
        >
          <img
            src={gif}
            alt="Icon"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
