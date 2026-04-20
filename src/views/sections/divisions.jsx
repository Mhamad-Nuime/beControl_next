'use client';
// @mui
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import Simulator from '@/components/Simulator';
import SimulatorTypeset from '@/components/SimulatorTypeset';
import { PRIVIEW_PATH, SECTION_PATH } from '@/path';
import { FIGMA_LINK } from '@/utils/constant';
import LazySection from '@/components/LazySection';
import { Feature20 } from '@/blocks/feature';


//@Component
import DivisionCard from '@/components/cards/DivisionCard';

// @data
import { feature18 } from '@/views/landings/default/data';

// @third-party
import { motion, useScroll, useTransform } from 'motion/react';

/***************************  ABOUT - BREADCRUMBS  ***************************/

let breadcrumbs = [{ title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' }, { title: 'About' }];

/***************************  ABOUT - DATA  ***************************/

const data = {
  heading: `${branding.brandName} Divisions`, // Dynamic heading for the divisions page
  captionLine:
    'Explore the key divisions of our company, where we drive innovation, excellence, and growth across various sectors and industries.',
  image: '/assets/images/hero/divisions-hero.webp', // Hero image for the divisions section
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Leading Divisions
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Empowering Innovation
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
            <CardMedia
              component="img"
              image="/assets/images/shared/fire.svg"
              sx={{ width: 16, height: 16 }}
              alt="division icon"
              loading="lazy"
            />
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
const divisions = [];
/***************************  SECTIONS - ABOUT  ***************************/

export default function Divisions() {
  return (
    <>
      <SectionHero {...{ ...data, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          {/* <Feature20 {...feature20} /> */}
          {feature18.topics.map((division, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <DivisionCard item={division} />
            </motion.div>
          ))}
        </Stack>
      </ContainerWrapper>
    </>
  );
}
