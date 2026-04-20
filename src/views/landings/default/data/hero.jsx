// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        Smart Solutions
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Stronger Industries
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/fire.svg"
              sx={{ width: 16, height: 16 }}
              alt="fire"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: 'Engineering Precision. Digital Intelligence. Industrial Impact',
  captionLine: 'We combine advanced analytics, high-accuracy engineering, and smart software technologies to deliver end-to-end solutions that strengthen performance and unlock new opportunities.',
  primaryBtn: { children: 'Explore Blocks', href: SECTION_PATH },
  videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: [
    { image: '/assets/images/shared/about-us.svg', title: 'About Us' },
    { image: '/assets/images/shared/impact-capabilities.svg', title: 'Impact & Capabilities' },
    // { image: '/assets/images/shared/javascript.svg', title: 'Our Expertise' },
    // { image: '/assets/images/shared/javascript.svg', title: 'Our Certifications' },
    // { image: '/assets/images/shared/javascript.svg', title: 'Our Standars' },
    // { image: '/assets/images/shared/javascript.svg', title: 'Our Vision' },
    { image: '/assets/images/shared/divisions.svg', title: 'Divisions' },
    { image: '/assets/images/shared/sectors-we-serve.svg', title: 'Sectors We Serve' },
    { image: '/assets/images/shared/partners.svg', title: 'Projects' },
    { image: '/assets/images/shared/customers.svg', title: 'Our Vision' },
    // { image: '/assets/images/shared/partners.svg', title: 'Partners' },
    { image: '/assets/images/shared/have-project-in-mind.svg', title: 'Have Project In Mind ?' },
    { image: '/assets/images/shared/contact-us.svg', title: 'Contact Us' }
  ]
};
