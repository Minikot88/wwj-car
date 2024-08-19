import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import number1 from "../components/Photo/1.png";
import number2 from "../components/Photo/2.png";
import number3 from "../components/Photo/3.png";
import number4 from "../components/Photo/4.png";
import number5 from "../components/Photo/5.png";
import number6 from "../components/Photo/6.png";

import wwj from "../components/Photo/WWJ.gif";
import THAI from "../components/Photo/THAI.png";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Condition() {

    return (
        <React.Fragment>
            <Container >
                <Box sx={{ flexGrow: 1, mt: 5, mb: 1 }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center" spacing={2}
                    >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 5 }}>
                                <Typography
                                    variant="h5"
                                    sx={{ fontSize: '30px', color: '#000000', fontWeight: 800, fontFamily: "TH Sarabun New" }}
                                >
                                    เงื่อนไข
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{ fontSize: '30px', color: '#FF0000', fontWeight: 800, fontFamily: "TH Sarabun New" }}
                                >
                                    การเช่ารถ
                                </Typography>
                            </Box>

                            {/* 1 */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '20px' }}>
                                <img
                                    src={number1}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        maxWidth: 30,
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                                <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '18px', color: '#54595F', fontFamily: "TH Sarabun New", }}>
                                    ชั่วโมงในการเช่า 24 ชั่วโมง ฟรีเหลดได้ 1 ชั่วโมง
                                </Typography>
                            </Box>

                            {/* 2 */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '20px' }}>
                                <img
                                    src={number2}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        maxWidth: 30,
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                                <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '18px', color: '#54595F', fontFamily: "TH Sarabun New", }}>
                                    ส่งรถช้าจากจากเวลาที่กำหนดไว้ ปรับ 100 บาท ต่อ 1 ชั่วโมง
                                </Typography>
                            </Box>

                            {/* 3 */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '20px' }}>
                                <img
                                    src={number3}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        maxWidth: 30,
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                                <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '18px', color: '#54595F', fontFamily: "TH Sarabun New", }}>
                                    ส่งรถช้าเกิน 5 ชั่วโมงคิดเป็น 1 วัน
                                </Typography>
                            </Box>

                            {/* 4 */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '20px' }}>
                                <img
                                    src={number4}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        maxWidth: 30,
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                                <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '18px', color: '#54595F', fontFamily: "TH Sarabun New", }}>
                                    ผู้ขับขี่ต้องทำเอกสารด้วยตนเองเท่านั้น
                                </Typography>
                            </Box>

                            {/* 5 */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '20px' }}>
                                <img
                                    src={number5}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        maxWidth: 30,
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                                <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '18px', color: '#54595F', fontFamily: "TH Sarabun New", }}>
                                    เอกสารการเข่ารถต้องเป็นคนเดียวกับผู้ทำสัญญาเท่านั้น
                                </Typography>
                            </Box>

                            {/* 6 */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '20px' }}>
                                <img
                                    src={number6}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        maxWidth: 30,
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                                <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '18px', color: '#FF0000', fontFamily: "TH Sarabun New", }}>
                                    ฟรีค่ามัดจำ เมื่อลูกค้าแสดงตั๋วเครื่องบิน
                                </Typography>
                            </Box>


                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div
                                style={{

                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={wwj}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Box>

                {/* เอกสาร หลักฐาน  การเช่ารถ */}
                <Box sx={{ flexGrow: 1, mt: 1, mb: 5 }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center" spacing={1}
                    >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div
                                style={{
                                    justifyContent: "left",
                                    alignItems: "left",
                                }}
                            >
                                <img
                                    src={THAI}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'left',
                                gap: 1,
                                mb: 5,
                                flexDirection: { xs: 'row', sm: 'row' }, // จัดแนวในแนวตั้งบนหน้าจอขนาดเล็กและในแนวนอนบนหน้าจอขนาดใหญ่
                                textAlign: { xs: 'left', sm: 'left' } // จัดตำแหน่งข้อความตามขนาดหน้าจอ
                            }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontSize: { xs: '20px', sm: '30px', md: '30px' }, // ปรับขนาดตัวอักษรตามขนาดหน้าจอ
                                        color: '#000000',
                                        fontWeight: 800,
                                        fontFamily: "TH Sarabun New"
                                    }}
                                >
                                    เอกสาร หลักฐาน
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontSize: { xs: '20px', sm: '30px', md: '30px' }, // ปรับขนาดตัวอักษรตามขนาดหน้าจอ
                                        color: '#FF0000',
                                        fontWeight: 800,
                                        fontFamily: "TH Sarabun New"
                                    }}
                                >
                                    การเช่ารถ
                                </Typography>
                            </Box>

                            {/* 1 */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '20px' }}>
                                <img
                                    src={number1}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        maxWidth: 30,
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                                <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '18px', color: '#54595F', fontFamily: "TH Sarabun New", }}>
                                    สำเนาบัตรประชาชน
                                </Typography>
                            </Box>

                            {/* 2 */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '20px' }}>
                                <img
                                    src={number2}
                                    alt="Icon"
                                    style={{
                                        width: "100%",
                                        maxWidth: 30,
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                                <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '18px', color: '#54595F', fontFamily: "TH Sarabun New", }}>
                                    สำเนาใบขับขี่
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}