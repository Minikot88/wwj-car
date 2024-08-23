import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ContactBox1 from "../components/ContactBox/conTactBox_1";
import ContactBox2 from "../components/ContactBox/conTactBox_2";
import ContactBox3 from "../components/ContactBox/conTactBox_3";
import ContactBox4 from "../components/ContactBox/conTactBox_4";
import ContactBox5 from "../components/ContactBox/conTactBox_5";
import ContactBox6 from "../components/ContactBox/conTactBox_6";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "200px",
  justifyContent: "center",
  alignContent: "center",
}));

const sx2 = {
  mt: "20px",
  mb: "10px",
  color: "#000000",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  width: "100%",
  fontSize: {
    xs: "30px",
    sm: "30px",
    md: "30px",
    lg: "30px",
    xl: "30px",
  },
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  animation: "fadeInLeft 4s ease-in-out forwards",
  animationDelay: "1s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
};

export default function Contact() {
  return (
    <Container maxWidth="100%" sx={{ mt: "10px", mb: "30px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={sx2}> ติดต่อเรา </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <ContactBox1 />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <ContactBox2 />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <ContactBox3 />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <ContactBox4 />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <ContactBox5 />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <ContactBox6 />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
