import * as React from "react";
import Box from "@mui/material/Box";

import MITSUBISHI_ATTRAGE from "../Photo/MITSUBISHI_ATTRAGE.png";
import "../css.css";

export default function Car2() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={MITSUBISHI_ATTRAGE} alt="MITSUBISHI ATTRAGE" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">MITSUBISHI ATTRAGE 800.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
