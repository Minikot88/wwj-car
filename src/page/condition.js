import * as React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';

import number1 from "../components/Photo/1.png";
import number2 from "../components/Photo/2.png";
import number3 from "../components/Photo/3.png";
import number4 from "../components/Photo/4.png";
import number5 from "../components/Photo/5.png";
import number6 from "../components/Photo/6.png";
import wwj from "../components/Photo/WWJ.gif";
import THAI from "../components/Photo/THAI.png";

const fadeInAnimation = (duration = '2s', easeType = 'ease-in-out') => ({
    opacity: 0,
    transform: 'translateY(-20px)',
    animation: `fadeIn ${duration} ${easeType} forwards`,
    '@keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'translateY(-20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
});

const FlexBox = ({ children, duration, easeType }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '20px', ...fadeInAnimation(duration, easeType) }}>
        {children}
    </Box>
);

const CustomTypography = ({ children, color }) => (
    <Typography
        variant="h5"
        sx={{
            fontSize: { xs: '20px', sm: '25px', md: '30px', lg: '35px', xl: '40px' },
            color,
            fontWeight: 800,
            fontFamily: 'TH Sarabun New',
            ...fadeInAnimation(),
        }}
    >
        {children}
    </Typography>
);

const ImageWithText = ({ src, text, color = '#54595F' }) => (
    <FlexBox>
        <img
            src={src}
            alt="Icon"
            style={{
                width: 'auto',
                maxWidth: '30px',
                height: 'auto',
                objectFit: 'contain',
            }}
        />
        <Typography
            variant="body2"
            sx={{
                textAlign: 'left',
                fontSize: { xs: '14px', sm: '16px', md: '18px' }, 
                color,
                fontFamily: 'TH Sarabun New',
            }}
        >
            {text}
        </Typography>
    </FlexBox>
);

export default function Condition() {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, mt: 5, mb: 1 }}>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <FlexBox>
                            <CustomTypography color="#000">เงื่อนไข</CustomTypography>
                            <CustomTypography color="#FF0000">การเช่ารถ</CustomTypography>
                        </FlexBox>

                        <ImageWithText src={number1} text="ชั่วโมงในการเช่า 24 ชั่วโมง ฟรีเหลดได้ 1 ชั่วโมง" />
                        <ImageWithText src={number2} text="ส่งรถช้าจากเวลาที่กำหนดไว้ ปรับ 100 บาท ต่อ 1 ชั่วโมง" />
                        <ImageWithText src={number3} text="ส่งรถช้าเกิน 5 ชั่วโมงคิดเป็น 1 วัน" />
                        <ImageWithText src={number4} text="ผู้ขับขี่ต้องทำเอกสารด้วยตนเองเท่านั้น" />
                        <ImageWithText src={number5} text="เอกสารการเข่ารถต้องเป็นคนเดียวกับผู้ทำสัญญาเท่านั้น" />
                        <ImageWithText src={number6} text="ฟรีค่ามัดจำ เมื่อลูกค้าแสดงตั๋วเครื่องบิน" color="#FF0000" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img src={wwj} alt="Icon" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1, mt: 1, mb: 5 }}>
                <Grid container justifyContent="center" alignItems="center" spacing={1}>
                    <Grid item xs={12} md={6} sx={fadeInAnimation()}>
                        <img src={THAI} alt="Icon" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <FlexBox>
                            <CustomTypography color="#000">เอกสาร หลักฐาน</CustomTypography>
                            <CustomTypography color="#FF0000">การเช่ารถ</CustomTypography>
                        </FlexBox>

                        <ImageWithText src={number1} text="สำเนาบัตรประชาชน" />
                        <ImageWithText src={number2} text="สำเนาใบขับขี่" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}