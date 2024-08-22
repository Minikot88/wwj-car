import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import gif from "../Photo/cargif2.gif";
import H1 from "../Photo/howto1.png";
import H2 from "../Photo/howto2.png";
import H3 from "../Photo/howto3.png";
import H4 from "../Photo/howto4.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FF0000',
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: '100%', // Make the height 100% to fill the grid item
  display: 'flex',
  flexDirection: 'column', // Stack child elements vertically
}));

const sx1 = {
  color: "#000000",
  textAlign: "center",
  justifyContent: "center",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  fontWeight: 700,
  letterSpacing: "1px",
  width: "100%",
  fontSize: {
    xs: "18px", // Small screen size (mobile)
    sm: "19px", // Small to medium screen size
    md: "20px", // Medium screen size
    lg: "20px", // Large screen size
    xl: "25px", // Extra-large screen size
  },
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  animation: "fadeIn 4s ease-in-out forwards",
  animationDelay: "1s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
};

const sx2 = {
  color: "#FFFFFF",
  display: "flex", // Flexbox for centering content
  textAlign: "left", // Align text to the left
  justifyContent: "center", // Center horizontally (if in a container)
  alignItems: "center", // Center vertically
  wordBreak: "break-word",
  overflowWrap: "break-word",
  width: "100%",
  fontSize: {
    xs: "16px", // Small screen size (mobile)
    sm: "18px", // Small to medium screen size
    md: "18px", // Medium screen size
    lg: "15px", // Large screen size
    xl: "18px", // Extra-large screen size
  },
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  animation: "fadeIn 4s ease-in-out forwards",
  animationDelay: "1s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
};

export default function Box4() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        {/* ข้อ 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ height: '100%' }}>
          <Item>
            <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: 2,
                    width: "100%",
                    height: '100%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={H1}
                    alt="Icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={sx1}>
                    1. โทรจองรถ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FF0000",
                    borderRadius: 2,
                    p: 1,
                  }}
                >
                  <Typography sx={sx2}>
                    ลูกค้าโทรตรวจสอบสถาณะรถและคิวรถได้โดยผ่านทางโทรศัพท์ หรือการส่งข้อความผ่าน Line
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        {/* ข้อ 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ height: '100%' }}>
          <Item>
            <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: 2,
                    width: "100%",
                    height: '100%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={H2}
                    alt="Icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={sx1}>
                    2. โอนเงินมัดจำ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FF0000",
                    borderRadius: 2,
                    p: 1,
                  }}
                >
                  <Typography sx={sx2}>
                    เมื่อลูกค้าตกลงใช้บริการกับเราแล้ว ให้ลูกค้าโอนชำระค่าบริการ เพื่อยืนยันการใช้บริการ
                  </Typography>

                  <Typography sx={sx2} mt={2}>
                    ***ฟรีค่ามัดจำ เมื่อแสดงตัวเครื่องบิน***
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        {/* ข้อ 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ height: '100%' }}>
          <Item>
            <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: 2,
                    width: "100%",
                    height: '100%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={H3}
                    alt="Icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={sx1}>
                    3. รับรถไปใช้
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FF0000",
                    borderRadius: 2,
                    p: 1,
                  }}
                >
                  <Typography sx={sx2}>
                    เมื่อถึงวันใช้บริการ ทางเราจะส่งรถไปยังลูกค้า
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        {/* ข้อ 4 */}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ height: '100%' }}>
          <Item>
            <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: 2,
                    width: "100%",
                    height: '100%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={H4}
                    alt="Icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={sx1}>
                    4. คืนรถ
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "#FF0000",
                    borderRadius: 2,
                    p: 1,
                  }}
                >
                  <Typography sx={sx2}>
                    เมื่อลูกค้าใช้บริการเสร็จเรียบร้อยแล้ว กรุณาส่งรถคืนตามเวลาและสถานที่ที่ตกลงไว้
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
