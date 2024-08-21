import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

import gif from "../Photo/carGif.gif";

const sx1 = {
  mt: 3,
  display: "flex",
  fontFamily: "monospace",
  fontWeight: 700,
  color: "#FFFFFF",
  textDecoration: "none",
  textAlign: "center",
  justifyContent: "center",
  width: "100%",
  fontSize: {
    xs: "1.5rem",
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
    xl: "3.5rem",
  },
  letterSpacing: {
    xs: ".1rem",
    sm: ".2rem",
    md: ".3rem",
    lg: ".4rem",
    xl: ".5rem",
  },
  textShadow: `
      1px 1px 2px rgba(0, 0, 0, 0.7), 
      2px 2px 5px rgba(0, 0, 0, 0.5), 
      3px 3px 8px rgba(0, 0, 0, 0.3)
    `, // เพิ่มเงาเพื่อให้ข้อความดูมีมิติ
  transform: "rotateX(20deg) rotateY(10deg)", // เพิ่มมิติด้วยการหมุนข้อความในแกน X และ Y
  opacity: 0,
  animation: "fadeIn 3s ease-in-out forwards",
  animationDelay: "0.5s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
  "&:hover": {
    color: "#FFD700", // เปลี่ยนสีข้อความเมื่อ hover
    transform: "rotateX(0deg) rotateY(0deg) scale(1.05)", // ทำให้ข้อความเด่นขึ้นเมื่อ hover
  },
};

const sx2 = {
  mt: 2,
  mb: 5,
  px: 2, // เพิ่ม padding ซ้าย-ขวาเพื่อให้ข้อความไม่ชิดขอบมากเกินไป
  color: "#FFFFFF",
  textAlign: "center",
  justifyContent: "center",
  width: "100%",
  lineHeight: 1.6,
  wordBreak: "break-word", // ทำให้ข้อความที่ยาวถูกตัดและแสดงในบรรทัดถัดไป
  overflowWrap: "break-word", // เพิ่มความสูงของบรรทัดเพื่อให้ข้อความอ่านง่ายขึ้น
  fontSize: {
    xs: "0.8rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.4rem",
    xl: "1.6rem",
  },
  textShadow: `
      1px 1px 2px rgba(0, 0, 0, 0.7), 
      2px 2px 5px rgba(0, 0, 0, 0.5), 
      3px 3px 8px rgba(0, 0, 0, 0.3)
    `,
  transform: "rotateX(20deg) rotateY(10deg)",
  letterSpacing: {
    xs: ".05rem",
    sm: ".075rem",
    md: ".1rem",
    lg: ".125rem",
    xl: ".15rem",
  },
  opacity: 0,
  animation: "fadeIn 4s ease-in-out forwards",
  animationDelay: "1s",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
  "&:hover": {
    color: "#FFD700", // เปลี่ยนสีข้อความเมื่อ hover
    transform: "rotateX(0deg) rotateY(0deg) scale(1.05)", // ทำให้ข้อความเด่นขึ้นเมื่อ hover
  },
};

export default function Box1() {
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
            height: "50%",
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

        <Typography sx={sx1} variant="h3">
          สะดวก ปลอดภัย และคุ้มค่า
        </Typography>

        <Typography sx={sx2} variant="caption">
          หากคุณกำลังมองหารถเช่าที่ตอบโจทย์ทุกความต้องการ
          ไม่ว่าจะเป็นการเดินทางในเมือง ออกทริปต่างจังหวัด
          หรือไปยังสถานที่ท่องเที่ยวต่างๆ
          บริการเช่ารถของเราพร้อมให้บริการคุณตลอดเวลา
          ด้วยรถยนต์หลากหลายรุ่นและประเภทที่มีคุณภาพ สะอาด ปลอดภัย
          และได้รับการบำรุงรักษาอย่างดีเยี่ยม
        </Typography>
      </Box>
    </Container>
  );
}