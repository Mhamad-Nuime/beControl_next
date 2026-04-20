// @project
// import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import {
  SECTION_PATH,
  ADMIN_PATH,
  BUY_NOW_URL,
  ABOUTUS_PATH,
  FREEBIES_URL,
  BLOG_PATH,
  DIVISION_PATH,
  PROJECT_PATH,
  CONTACT_US_PATH,
  ABOUT_US_PATH
} from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  // secondaryBtn: {
  //   children: <SvgIcon name="tabler-brand-github" color="primary.main" size={18} />,
  //   href: CONTACT_US_PATH,
  //   ...linkProps,
  //   sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  // },
  primaryBtn: { children: 'Contact Us', href: CONTACT_US_PATH },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    // landingMegamenu,
    { id: 'Divisions', title: 'Divisions', link: DIVISION_PATH },
    { id: 'Projects', title: 'Projects', link: PROJECT_PATH },
    { id: 'About Us', title: 'About Us', link: ABOUT_US_PATH },
    { id: 'Blog', title: 'Blog', link: BLOG_PATH }
    // pagesMegamenu,
    // { id: 'docs', title: 'Docs', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
