// @project
import { PAGE_PATH, PROJECT_PATH } from '@/path';

// @assets
const imagePrefix = '/assets/images/presentation';

// @project
import branding from '@/branding.json';

export const other = {
  heading: `${branding.brandName} Projects`,
  description:
    'Discover our industrial solutions—from automation and control systems to integration and performance optimization—built to improve efficiency, reliability, and scalability.',
  primaryBtn: { children: 'Explore all Projects', href: PROJECT_PATH },

  sections: [
    {
      animationDelay: 0.2,
      title: 'Automation Systems',
      subTitle: 'Advanced Industrial Control',
      image: `${imagePrefix}/hero-light.svg`,
      link: PAGE_PATH.hero,
    },
    {
      animationDelay: 0.3,
      title: 'Control Solutions',
      subTitle: 'Smart & Reliable Operations',
      image: `${imagePrefix}/cta-light.svg`,
      link: PAGE_PATH.cta,
    },
    {
      animationDelay: 0.4,
      title: 'System Features',
      subTitle: 'Optimized for Performance',
      image: `${imagePrefix}/feature-light.svg`,
      link: PAGE_PATH.feature,
    },
    {
      animationDelay: 0.2,
      title: 'Performance Metrics',
      subTitle: 'Data-Driven Insights',
      image: `${imagePrefix}/metrics-light.svg`,
      link: PAGE_PATH.metrics,
    },
    {
      animationDelay: 0.3,
      title: 'Process Engineering',
      subTitle: 'Efficient Workflow Design',
      image: `${imagePrefix}/process-light.svg`,
      link: PAGE_PATH.process,
    },
    {
      animationDelay: 0.4,
      title: 'System Integration',
      subTitle: 'Seamless Connectivity',
      image: `${imagePrefix}/integration-light.svg`,
      link: PAGE_PATH.integration,
    },
  ],
};

export const other3 = {
  heading: 'Join a Winning Team',
  caption: 'Be a part of a winning culture that fosters collaboration, creativity, and success in every career path',
  other: [
    {
      title: 'Product Design',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Front-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Back-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Scrum Master',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    }
  ]
};
