import * as React from "react";
import Box from "@mui/material/Box";

import HONDA_BR_V from "../Photo/HONDA_BR_V.png";
import "../css.css";

export default function Car12() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={HONDA_BR_V} alt="HONDA_BR_V" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">HONDA BR-V 1500.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
