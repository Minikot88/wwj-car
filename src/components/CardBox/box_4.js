import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Box4() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        {/* ข้อ 1 */}
        <Grid item xs={3}>
          <Item>
            <Grid container spacing={0.5}>
              <Grid item xs={12}>
                <Box
                  sx={{ bgcolor: "#000000", height: 250, borderRadius: 2 }}
                ></Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{ bgcolor: "#FF0000", height: 60, borderRadius: 2 }}
                ></Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{ bgcolor: "#000000", height: 100, borderRadius: 2 }}
                ></Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>

     

        {/* ข้อ 2 */}
        <Grid item xs={3}>
          <Item>2</Item>
        </Grid>

        {/* ข้อ 3 */}
        <Grid item xs={3}>
          <Item>3</Item>
        </Grid>

        {/* ข้อ 4 */}
        <Grid item xs={3}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
