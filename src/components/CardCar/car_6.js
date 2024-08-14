import * as React from "react";
import Box from "@mui/material/Box";

import NISSN_ALMERA from "../Photo/NISSN_ALMERA.png";
import "../css.css";

export default function Car6() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={NISSN_ALMERA} alt="NISSN_ALMERA" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">NISSN ALMERA 900.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
