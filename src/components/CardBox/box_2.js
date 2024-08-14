import * as React from 'react';
import Box from '@mui/material/Box';

//import car from '../Photo/car1.png';
import { Container, Typography } from '@mui/material';

export default function Box2() {
    return (
        <Container maxWidth="mg">
            <Box
                sx={{
                    mt: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column', // จัดองค์ประกอบภายในแนวตั้ง
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        mt: 2,

                        display: 'flex',
                        color: '#FF0000',
                        textAlign: 'center',
                        justifyContent: 'center',
                        width: '100%',

                        // ใช้ breakpoints สำหรับ responsive
                        fontSize: {
                            xs: '16px',  // ขนาดหน้าจอเล็ก (มือถือ)
                            sm: '1rem',    // ขนาดหน้าจอเล็กถึงกลาง
                            md: '1.2rem',  // ขนาดหน้าจอกลาง
                            lg: '1.4rem',  // ขนาดหน้าจอใหญ่
                            xl: '30px',  // ขนาดหน้าจอใหญ่มาก
                        },
                        letterSpacing: {
                            xs: '.05rem',  // ปรับระยะห่างของตัวอักษรสำหรับหน้าจอเล็ก
                            sm: '.075rem',
                            md: '.1rem',
                            lg: '.125rem',
                            xl: '.15rem',
                        },
                    }}
                >
                    แวววันจิตร บริการรถเช่า หาดใหญ่ สงขลา พร้อมบริการส่งรถ
                </Typography>

                <Typography
                    variant="caption"
                    sx={{
                        mt: 1,
                        mb: 5,
                        display: 'flex',
                        color: '#FF0000',
                        textAlign: 'center',
                        justifyContent: 'center',
                        width: '100%',

                        // ใช้ breakpoints สำหรับ responsive
                        fontSize: {
                            xs: '0.8rem',  // ขนาดหน้าจอเล็ก (มือถือ)
                            sm: '1rem',    // ขนาดหน้าจอเล็กถึงกลาง
                            md: '1.2rem',  // ขนาดหน้าจอกลาง
                            lg: '17px',  // ขนาดหน้าจอใหญ่
                            xl: '18px',  // ขนาดหน้าจอใหญ่มาก
                        },
                        letterSpacing: {
                            xs: '.05rem',  // ปรับระยะห่างของตัวอักษรสำหรับหน้าจอเล็ก
                            sm: '.075rem',
                            md: '.1rem',
                            lg: '.125rem',
                            xl: '.15rem',
                        },
                    }}
                >
                    บริการรถเช่าคุณภาพ ราคาพิเศษ รถสภาพดี ราคาถูก ราคาสบายกระเป๋า หาดใหญ่ สงขลา พร้อมบริการส่งรถ 095-9287188, 063-1019403
                </Typography>

            </Box>
        </Container>


    );
}