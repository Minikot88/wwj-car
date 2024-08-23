import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import H1 from "../Photo/howto1.png";
import H2 from "../Photo/howto2.png";
import H3 from "../Photo/howto3.png";
import H4 from "../Photo/howto4.png";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#ebebeb",
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const sx1 = {
  color: "#FFFFFF",
  textAlign: "center",
  justifyContent: "center",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  fontWeight: 700,
  letterSpacing: "1px",
  width: "100%",
  fontSize: {
    xs: "18px",
    sm: "19px",
    md: "20px",
    lg: "20px",
    xl: "25px",
  },
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  animation: "fadeInLeft 4s ease-in-out forwards",
  animationDelay: "1s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
};

const sx2 = {
  color: "#000000",
  display: "flex",
  textAlign: "left",
  justifyContent: "center",
  alignItems: "center",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  width: "100%",
  fontSize: {
    xs: "16px",
    sm: "18px",
    md: "18px",
    lg: "15px",
    xl: "18px",
  },
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  animation: "fadeInLeft 4s ease-in-out forwards",
  animationDelay: "1s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
};

const boxImg = {
  bgcolor: "#FFFFFF",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
};

const img = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  borderRadius: "10px",
};

const boxText1 = {
  bgcolor: "#FF0000",
  borderRadius: 2,
  p: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const boxText2 = {
  bgcolor: "#ebebeb",
  borderRadius: 2,
  p: 1,
};

export default function Box4() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        {/* ข้อ 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ height: "100%" }}>
          <Item>
            <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
              <Grid item xs={12}>
                <Box sx={{ ...boxImg }}>
                  <img src={H1} alt="Icon" style={{ ...img }} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ ...boxText1 }}>
                  <Typography sx={sx1}>1. โทรจองรถ</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ ...boxText2 }}>
                  <Typography sx={sx2}>
                    ลูกค้าโทรตรวจสอบสถาณะรถและคิวรถได้โดยผ่านทางโทรศัพท์
                    หรือการส่งข้อความผ่าน Line
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        {/* ข้อ 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ height: "100%" }}>
          <Item>
            <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
              <Grid item xs={12}>
                <Box sx={{ ...boxImg }}>
                  <img src={H2} alt="Icon" style={{ ...img }} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ ...boxText1 }}>
                  <Typography sx={sx1}>2. โอนเงินมัดจำ</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ ...boxText2 }}>
                  <Typography sx={sx2}>
                    เมื่อลูกค้าตกลงใช้บริการกับเราแล้ว ให้ลูกค้าโอนชำระค่าบริการ
                    เพื่อยืนยันการใช้บริการ
                  </Typography>
                  <Typography sx={{ ...sx2, color: "#FF0000", mt: 2 }}>
                    ***ฟรีค่ามัดจำ เมื่อแสดงตัวเครื่องบิน***
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        {/* ข้อ 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ height: "100%" }}>
          <Item>
            <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
              <Grid item xs={12}>
                <Box sx={{ ...boxImg }}>
                  <img src={H3} alt="Icon" style={{ ...img }} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ ...boxText1 }}>
                  <Typography sx={sx1}>3. รับรถไปใช้</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ ...boxText2 }}>
                  <Typography sx={sx2}>
                    เมื่อถึงวันใช้บริการ ทางเราจะส่งรถไปยังลูกค้า
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        {/* ข้อ 4 */}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ height: "100%" }}>
          <Item>
            <Grid container spacing={0.5} sx={{ flexGrow: 1 }}>
              <Grid item xs={12}>
                <Box sx={{ ...boxImg }}>
                  <img src={H4} alt="Icon" style={{ ...img }} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ ...boxText1 }}>
                  <Typography sx={sx1}>4. คืนรถ</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ ...boxText2 }}>
                  <Typography sx={sx2}>
                    เมื่อลูกค้าต้องการคืนรถ ให้โทรแจ้งล่วงหน้า
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
