import * as React from "react";
import Box from "@mui/material/Box";

import TOYOTA_FORTUNER_1 from "../Photo/TOYOTA_FORTUNER_1.png";
import "../css.css";

export default function Car13() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={TOYOTA_FORTUNER_1} alt="TOYOTA_FORTUNER_1" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">TOYOTA FORTUNER 2000.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
