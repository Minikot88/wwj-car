import * as React from "react";
import Box from "@mui/material/Box";

import TOYOTA_FORTUNER_2 from "../Photo/TOYOTA_FORTUNER_2.png";
import "../css.css";

export default function Car14() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={TOYOTA_FORTUNER_2} alt="TOYOTA_FORTUNER_2" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">TOYOTA FORTUNER 2500.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
