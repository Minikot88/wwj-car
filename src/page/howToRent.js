import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box3 from "../components/CardBox/box_3";
import Box4 from "../components/CardBox/box_4";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#ebebeb",
  padding: 1,
  textAlign: "center",
  color: "#000000",
}));

export default function HowToRent() {
  return (
    <Container maxWidth="100%" sx={{ mt: 1, mb: 1 }}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}>
            <Item>
              {" "}
              <Box3 />{" "}
            </Item>
          </Grid>
          <Grid item xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}>
            <Item>
              {" "}
              <Box4 />{" "}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
