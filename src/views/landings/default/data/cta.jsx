// @mui
import branding from '@/branding.json';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { CONTACT_US_PATH } from '@/path';

// @project
import { NextLink } from '@/components/routes';

export const cta4 = {
  headLine: 'Why Trust Phoenixcoded for Your Dashboard Template Needs?',
  primaryBtn: {
    children: 'Read Our story',
    href: 'https://blog.saasable.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '250+ Author Reviews (4.65 out of 5)'
  },
  list: [
    { primary: '10+ Years Expertise' },
    { primary: '8k+ Satisfied Customers' },
    { primary: 'Elite Envato Author' },
    { primary: 'Timely Support, Guaranteed' },
    { primary: 'Regular Updates Provided' },
    { primary: 'Proven Industry Leader' }
  ],
  clientContent: 'Learn More'
};

function DescriptionLine() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Have questions? Our community is here to help. Learn more about{' '}
      <Link component={NextLink} variant="caption2" color="primary" href={branding.company.socialLink.discord} underline="hover">
        our community
      </Link>
    </Typography>
  );
}

export const cta5 = {
  label: 'Our Vision',
  heading: 'Building Smarter Industrial Solutions',
  caption: 'We deliver reliable engineering systems that improve safety, efficiency, and long-term operational performance.',
  primaryBtn: {
    children: 'Contact Us',
    href: CONTACT_US_PATH,
  },
  // description: <DescriptionLine />,
  saleData: { count: 40, defaultUnit: '+', caption: 'Industrial projects delivered across sectors' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/partners/Emblem_of_Syria.webp' },
      { avatar: '/assets/images/partners/Emblem_of_Syria.webp' },
      { avatar: '/assets/images/partners/Emblem_of_Syria.webp' },
      { avatar: '/assets/images/partners/Emblem_of_Syria.webp' },
      { avatar: '/assets/images/partners/Emblem_of_Syria.webp' }
    ],
    review: '50+ Client Partnerships'
  }
};

export const cta10 = {
  heading: "Couldn't find the perfect role for you?",
  caption: 'No worries – we encourage you to apply anyway! Your unique skills and talents might be just what we need.',
  primaryBtn: { children: 'Send Your Resume', href: '#' },
  secondaryBtn: { children: 'Contact Us', href: '#' },
  image: '/assets/images/graphics/ai/graphics15-light.svg',
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  }
};
