import * as React from "react";
import Box from "@mui/material/Box";

import HONDA_BRIO from "../Photo/HONDA_BRIO.png";
import "../css.css";

export default function Car5() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={HONDA_BRIO} alt="HONDA_BRIO" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">HONDA BRIO 800.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
