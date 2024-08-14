import * as React from "react";
import Box from "@mui/material/Box";

import SUZUKI_CIAZ from "../Photo/SUZUKI_CIAZ.png";
import "../css.css";

export default function Car3() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={SUZUKI_CIAZ} alt="SUZUKI_CIAZ" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">SUZUKI CIAZ 800.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
