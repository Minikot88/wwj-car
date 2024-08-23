import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const sx1 = {
  mt: "10px",
  color: "#FF6F61",
  textAlign: "center",
  justifyContent: "center",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  fontWeight: 700,
  letterSpacing: "1px",
  width: "100%",
  fontSize: {
    xs: "20px", // ขนาดหน้าจอเล็ก (มือถือ)
    sm: "25px", // ขนาดหน้าจอเล็กถึงกลาง
    md: "30px", // ขนาดหน้าจอกลาง
    lg: "30px", // ขนาดหน้าจอใหญ่
    xl: "40px", // ขนาดหน้าจอใหญ่มาก
  },
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  animation: "fadeIn 4s ease-in-out forwards",
  animationDelay: "1s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
};

const sx2 = {
  mt: "10px",
  mb: "10px",
  color: "#000000",
  textAlign: "center",
  justifyContent: "center",
  width: "100%",
  fontSize: {
    xs: "14px", // ขนาดหน้าจอเล็ก (มือถือ)
    sm: "16px", // ขนาดหน้าจอเล็กถึงกลาง
    md: "18px", // ขนาดหน้าจอกลาง
    lg: "20px", // ขนาดหน้าจอใหญ่
    xl: "22px", // ขนาดหน้าจอใหญ่มาก
  },
  lineHeight: 1.5,
  animation: "fadeIn 4s ease-in-out forwards",
  animationDelay: "1s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
};

export default function Box2() {
  return (
    <Container
      maxWidth="mg"
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={sx1}>
          แวววันจิตร บริการรถเช่า หาดใหญ่ สงขลา พร้อมบริการส่งรถ
        </Typography>

        <Typography sx={sx2}>
          บริการรถเช่าคุณภาพ ราคาพิเศษ รถสภาพดี ราคาถูก ราคาสบายกระเป๋า หาดใหญ่
          สงขลา พร้อมบริการส่งรถ 095-9287188, 063-1019403
        </Typography>
      </Box>
    </Container>
  );
}
