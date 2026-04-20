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

// @data
import {
  // metrics,
  partners,
  customers,
  // cta4,
  cta5,
  // faq,
  feature20
  // feature21,
  // feature18,
  // hero,
  // integration,
  // other,
  // pricing,
  // testimonial
} from '@/views/landings/default/data';

/***************************  ABOUT - BREADCRUMBS  ***************************/

let breadcrumbs = [{ title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' }, { title: 'About' }];

/***************************  ABOUT - DATA  ***************************/
const data = {
  heading: `About ${branding.brandName}`,
  captionLine:
    `At ${branding.brandName}, we are dedicated to providing innovative solutions that empower industries and enhance performance. With a focus on sustainability and growth, we strive to create smarter, more efficient solutions for a better tomorrow.`,
  image: '/assets/images/hero/aboutus-hero.webp',
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Innovative Solutions
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Empowering Industries
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

export default function About() {
  return (
    <>
      <SectionHero {...{ ...data, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          <Feature20 {...feature20} />
        </Stack>
        <LazySection
          sections={[
            { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta5 })), props: cta5 },
            { importFunc: () => import('@/blocks/slider').then((module) => ({ default: module.MSlider })), props: partners },
            { importFunc: () => import('@/blocks/slider').then((module) => ({ default: module.MSlider })), props: customers }
          ]}
          offset="200px"
        />
      </ContainerWrapper>
    </>
  );
}
