import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

import car from "../Photo/car1.png";
import gif from "../Photo/carGif.gif";

export default function Box1() {
  return (
    <Container maxWidth="mg">
      <Box
        sx={{
          mt: 5,
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
          {/* <img
            src={car}
            alt="Icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          /> */}

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

        <Typography
          variant="h3"
          sx={{
            mt: 3,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
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
            opacity: 0,
            animation: "fadeIn 3s ease-in-out forwards",
            animationDelay: "0.5s",
            transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out", // สำหรับ hover effect
            "&:hover": {
              color: "#FFD700", // เปลี่ยนสีข้อความเมื่อ hover
              transform: "translateY(-5px)", // ยกข้อความขึ้นเมื่อ hover
            },
          }}
        >
          สะดวก ปลอดภัย และคุ้มค่า
        </Typography>

        <Typography
          variant="caption"
          sx={{
            mt: 2,
            mb: 5,
            display: "flex",
            color: "#FFFFFF",
            textAlign: "center",
            justifyContent: "center",
            width: "100%",
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.4rem",
              xl: "1.6rem",
            },
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
            transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out", // สำหรับ hover effect
            "&:hover": {
              color: "#FFD700", // เปลี่ยนสีข้อความเมื่อ hover
              transform: "translateY(-5px)", // ยกข้อความขึ้นเมื่อ hover
            },
          }}
        >
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
