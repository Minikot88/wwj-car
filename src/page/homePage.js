import * as React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Box1 from "../components/CardBox/box_1";
import Box2 from "../components/CardBox/box_2";

import Car1 from "../components/CardCar/car_1";
import Car2 from "../components/CardCar/car_2";
import Car3 from "../components/CardCar/car_3";
import Car4 from "../components/CardCar/car_4";
import Car5 from "../components/CardCar/car_5";
import Car6 from "../components/CardCar/car_6";
import Car7 from "../components/CardCar/car_7";
import Car8 from "../components/CardCar/car_8";
import Car9 from "../components/CardCar/car_9";
import Car10 from "../components/CardCar/car_10";
import Car11 from "../components/CardCar/car_11";
import Car12 from "../components/CardCar/car_12";
import Car13 from "../components/CardCar/car_13";
import Car14 from "../components/CardCar/car_14";
import DialogSlide from "../components/Feedback/dialog";

export default function HomePage() {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
  }));

  return (
    <React.Fragment>
      <DialogSlide/>
      <Container maxWidth="mg">
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} md={12}>
              <Item sx={{ bgcolor: "#FF0000" }}>
                {" "}
                <Box1 />{" "}
              </Item>
            </Grid>
            <Grid item xs={12} md={12} sx={{ mt: 1 }}>
              <Item sx={{ bgcolor: "#FFFFFF" }}>
                {" "}
                <Box2 />{" "}
              </Item>
            </Grid>

            {/* NISSAN_MARCH */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car1 />
              </Grid>
            </Grid>

            {/* MITSUBISHI_ATTRAGE */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car2 />
              </Grid>
            </Grid>

            {/* SUZUKI_CIAZ */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car3 />
              </Grid>
            </Grid>

            {/* SUZUKI_SWIFT */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car4 />
              </Grid>
            </Grid>

            {/* HONDA_BRIO */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car5 />
              </Grid>
            </Grid>

            {/* NISSN_ALMERA */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car6 />
              </Grid>
            </Grid>

            {/* TOYOTA_YARIS */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car7 />
              </Grid>
            </Grid>

            {/* TOYOTA_ALL_YARIS */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car8 />
              </Grid>
            </Grid>

            {/* TOYOTA_VIOS */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car9 />
              </Grid>
            </Grid>

            {/* TOYOTA_ALL_VIOS */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car10 />
              </Grid>
            </Grid>

            {/* TOYOTA_COROLLA */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car11 />
              </Grid>
            </Grid>

            {/* TOYOTA_FORTUNER_1 */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car12 />
              </Grid>
            </Grid>

            {/* TOYOTA_FORTUNER_1 */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car13 />
              </Grid>
            </Grid>

            {/* TOYOTA_FORTUNER_2 */}
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid
                container
                sx={{
                  p: 1,
                  bgcolor: "#FF0000",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Car14 />
              </Grid>
            </Grid>

            {/* วงนอก */}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
