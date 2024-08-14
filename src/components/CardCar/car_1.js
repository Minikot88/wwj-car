import * as React from "react";
import Box from "@mui/material/Box";

import NISSAN_MARCH from "../Photo/NISSAN_MARCH.png";
import "../css.css";

export default function Car1() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={NISSAN_MARCH} alt="NISSAN MARCH" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">NISSAN MARCH 690.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
