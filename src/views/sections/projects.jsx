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
import Grid from '@mui/material/Grid';

//@Component
import ProjectCard from '@/components/cards/ProjectCard';

// @third-party
import { motion, useScroll, useTransform } from 'motion/react';
/***************************  ABOUT - BREADCRUMBS  ***************************/

let breadcrumbs = [{ title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' }, { title: 'About' }];

/***************************  ABOUT - DATA  ***************************/
import { projects } from '@/views/landings/default/data';

export const projectHero = {
  heading: `Our Projects`, // Dynamic heading for the projects page
  captionLine:
    'Explore our groundbreaking projects that showcase our commitment to innovation, sustainability, and delivering value across diverse industries.',
  image: '/assets/images/hero/project-hero.webp', // Hero image for the projects section
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Project Highlights
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Driving Impact
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
              alt="project icon"
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
/***************************  SECTIONS - ABOUT  ***************************/

export default function Projects() {
  return (
    <>
      <SectionHero {...{ ...projectHero, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          <Grid container spacing={1.5}>
            {projects.map((project, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 4 }}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </ContainerWrapper>
    </>
  );
}
