import * as React from "react";
import Box from "@mui/material/Box";

import TOYOTA_COROLLA from "../Photo/TOYOTA_COROLLA.png";
import "../css.css";

export default function Car11() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={TOYOTA_COROLLA} alt="TOYOTA_COROLLA" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">TOYOTA COROLLA 1400.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
