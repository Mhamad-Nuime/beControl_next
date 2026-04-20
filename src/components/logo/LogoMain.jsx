'use client';

// @mui
// import { useTheme } from '@mui/material/styles';
// import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
// import Image from 'next/image'

// @project
// import branding from '@/branding.json';

/***************************  LOGO - MAIN  ***************************/

export default function LogoMain() {
  // const theme = useTheme();
  // const logoMainPath = branding.logo.main;
  // const palette = theme?.vars ? theme.vars.palette : theme.palette;

  return (
    <Box sx={{ width: { xs: 112, lg: 140 }, height: { xs: 22, lg: 26 } }}>
      {/* <Image src="/assets/logo/full-logo.png" alt="logo" /> */}
      <img
        src="/assets/logo/full-logo.webp"
        alt="Picture of the author"
        width={140}
        height={50}
        style={{ position: 'relative', top: '-50%' }}
      />
    </Box>
  );
}
