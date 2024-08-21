import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import logo1 from "../Photo/logo2.png";
import line from "../Photo/line.png";
import gmail from "../Photo/gmail.png";
import phone from "../Photo/phone.png";
import facebook from "../Photo/facebook.png";
import location from "../Photo/location.png";

function Copyright() {
    return (
        <Typography variant="body2" color="#FFFFFF" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Footer(props) {
    const { description, title } = props;

    return (
        <Box component="footer" sx={{ bgcolor: '#000000', py: 2 }}>
            <Box sx={{ bgcolor: '#000000', p: 2 }}>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={3}
                    sx={{
                        color: '#FFFFFF',
                        textAlign: 'center'
                    }}>

                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                        component="a"
                        href="/"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 2,
                            cursor: "pointer",
                            textDecoration: 'none',
                            mt: '2%'
                        }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}>
                            <img
                                src={logo1}
                                alt="Icon"
                                style={{
                                    width: "100%",
                                    maxWidth: 100,
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Typography variant="h6" sx={{ textAlign: 'left', lineHeight: 1.6 }} gutterBottom>
                            เกี่ยวกับเรา
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'left',
                                lineHeight: 1.6,
                                wordBreak: 'break-word', // ทำให้ข้อความที่ยาวถูกตัดและแสดงในบรรทัดถัดไป
                                overflowWrap: 'break-word' // ให้ข้อความที่ยาวเกินไปตัดในกรณีที่ไม่พอ
                            }}
                        >
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </Typography>
                    </Grid>


                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Typography variant="h6" sx={{ textAlign: 'left', lineHeight: 1.6 }} gutterBottom>
                            บริการ
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6, mb: '5px' }}>
                            หน้าหลัก
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6, mb: '5px' }}>
                            เงื่อนไขการเช่ารถ
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6, mb: '5px' }}>
                            วิธีการเช่ารถ
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6, mb: '5px' }}>
                            ติดต่อเรา
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Typography variant="h6" sx={{ textAlign: 'left', lineHeight: 1.6 }} gutterBottom>
                            ติดต่อเรา
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '5px' }}>
                            <img
                                src={location}
                                alt="Icon"
                                style={{
                                    width: "100%",
                                    maxWidth: 20,
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                            <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6 }}>
                                111/1 ม.5 ต.ท่าช้าง อ.บางกล่ำ จ.สงขลา 90110
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '5px' }}>
                            <img
                                src={facebook}
                                alt="Icon"
                                style={{
                                    width: "100%",
                                    maxWidth: 20,
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                            <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6 }}>
                                WWJ CAR
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '5px' }}>
                            <img
                                src={phone}
                                alt="Icon"
                                style={{
                                    width: "100%",
                                    maxWidth: 20,
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                            <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6 }}>
                                063 101 9403
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '5px' }}>
                            <img
                                src={gmail}
                                alt="Icon"
                                style={{
                                    width: "100%",
                                    maxWidth: 20,
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                            <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6 }}>
                                sakeena1995@gmail.com
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '5px' }}>
                            <img
                                src={line}
                                alt="Icon"
                                style={{
                                    width: "100%",
                                    maxWidth: 20,
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                            <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6 }}>
                                @WWJCAR
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Box>


            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}

Footer.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Footer;