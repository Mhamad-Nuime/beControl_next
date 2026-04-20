'use client';
// @mui
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';

//@Component
import BlogCard from '@/components/cards/BlogCard';

// @third-party
import { motion } from 'motion/react';
/***************************  ABOUT - BREADCRUMBS  ***************************/

let breadcrumbs = [{ title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' }, { title: 'About' }];

/***************************  ABOUT - DATA  ***************************/
import { blogs } from '@/views/landings/default/data';

export const blogHero = {
  heading: 'Blog',
  captionLine:
    'Dive into our insights where we explore the latest trends, innovative solutions, and cutting-edge technologies that drive performance and create new opportunities in the industry.',
  image: '/assets/images/hero/blog-hero.webp',
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Industry Insights
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Empowering Growth
            </Typography>
          }
          sx={{
            height: 24,
            bgcolor: 'primary.lighter',
            mr: -1,
            ml: 0.75,
            '& .MuiChip-label': { px: 1.25 }
          }}
          icon={
            <CardMedia component="img" image="/assets/images/shared/fire.svg" sx={{ width: 16, height: 16 }} alt="fire" loading="lazy" />
          }
        />
      </>
    )
  }
};
// const sectionsData = [
//   {
//     typeset: {
//       heading: 'About Section - 01',
//       caption: '',
//       figmaLink: FIGMA_LINK.about.variant.about1
//     },
//     src: PRIVIEW_PATH.about.about1
//   },
//   {
//     typeset: {
//       heading: 'About Section - 02',
//       caption: '',
//       figmaLink: FIGMA_LINK.about.variant.about2
//     },
//     src: PRIVIEW_PATH.about.about2
//   },
//   {
//     typeset: {
//       heading: 'About Section - 03',
//       caption: '',
//       figmaLink: FIGMA_LINK.about.variant.about3
//     },
//     src: PRIVIEW_PATH.about.about3
//   }
// ];

/***************************  SECTIONS - ABOUT  ***************************/

export default function Blog() {
  return (
    <>
      <SectionHero {...{ ...blogHero, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          {/* <Feature20 {...feature20} /> */}
          {blogs.map((blogItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <BlogCard {...blogItem} />
            </motion.div>
          ))}
        </Stack>
      </ContainerWrapper>
    </>
  );
}
