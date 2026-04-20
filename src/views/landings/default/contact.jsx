// @project
// import { Cta5 } from '@/blocks/cta';
import { ContactUs4 } from '@/blocks/contact-us';
import SectionHero from '@/components/SectionHero';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';



// @data
import { cta5, contactUS } from './data';

/***************************  PAGE - CONTACT  ***************************/

const data = {
  heading: 'Contact Us',
  captionLine:
    'We would love to hear from you. Whether you have questions about our products, services, or need support, our team is here to help. Get in touch with us today to start a conversation!',
  image: '/assets/images/hero/contact-us-hero.webp',
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Get In Touch
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              We’re Here to Help
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
            <CardMedia component="img" image="/assets/images/shared/fire.svg" sx={{ width: 16, height: 16 }} alt="contact" loading="lazy" />
          }
        />
      </>
    )
  },
};

/***************************  PAGE - CONTACT  ***************************/


export default function Contact() {
  return (
    <>
      <SectionHero {...{ ...data }} />
      <ContactUs4 {...contactUS} />
      {/* <Cta5 {...cta5} /> */}
    </>
  );
}
