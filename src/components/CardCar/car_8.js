import * as React from "react";
import Box from "@mui/material/Box";

import TOYOTA_ALL_YARIS from "../Photo/TOYOTA_ALL_YARIS.png";
import "../css.css";

export default function Car8() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={TOYOTA_ALL_YARIS} alt="TOYOTA_ALL_YARIS" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">TOYOTA NEW YARIS 900.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
