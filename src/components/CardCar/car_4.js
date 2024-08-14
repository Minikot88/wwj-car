import * as React from "react";
import Box from "@mui/material/Box";

import SUZUKI_SWIFT from "../Photo/SUZUKI_SWIFT.png";
import "../css.css";

export default function Car4() {
  return (
    <Box>
      {/* รูป */}
      <div className="responsive-container">
        <div className="responsive-image-container">
          <img src={SUZUKI_SWIFT} alt="SUZUKI_SWIFT" />
        </div>
      </div>

      {/* ชื่อ+ราคา */}
      <div className="responsive-box-large">SUZUKI SWIFT 800.-</div>

      {/* คำอธิบาย */}
      <div className="responsive-box">
        เป็นรถยนต์ขนาดเล็กที่เน้นความคล่องตัวในการขับขี่และประหยัดน้ำมัน
        เหมาะสำหรับการใช้งานในเมืองและการเดินทางระยะสั้น
      </div>
    </Box>
  );
}
