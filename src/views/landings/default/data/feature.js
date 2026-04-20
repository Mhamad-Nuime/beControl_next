// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { CONTACT_US_PATH, DIVISION_PATH } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const feature2 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  features: [
    {
      icon: { name: 'tabler-users', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-star', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-chart-histogram', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Growth',
      content: 'Our culture prioritizes continuous learning, encouraging personal and professional development. '
    }
  ]
};

export const feature5 = {
  heading: 'Beyond the 9-to-5',
  caption: 'Our benefits go beyond the standard, ensuring your life outside of work is just as fulfilling.',
  image1: '/assets/images/graphics/ai/graphics3-light.svg',
  image2: '/assets/images/graphics/ai/graphics2-light.svg',
  features: [
    {
      icon: 'tabler-coin',
      title: 'Compensation',
      content: 'Enjoy a competitive salary that recognizes your skills and contributions.'
    },
    {
      icon: 'tabler-health-recognition',
      title: 'Healthcare',
      content: "Access to a comprehensive healthcare plan, ensuring you and your family's well-being."
    }
  ],
  features2: [
    {
      icon: 'tabler-briefcase',
      title: 'Automated Scaling',
      content: 'Embrace a flexible work environment, allowing you to balance work.'
    },
    {
      icon: 'tabler-users',
      title: 'Real-Time',
      content: 'Support your family commitments with family-friendly policies and benefits.'
    }
  ],
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  },
  content: 'Explore diverse career paths within the company through our internal mobility programs.',
  actionBtn: { children: 'Explore all Features', href: '#' }
};

export const feature20 = {
  heading: 'About Us',
  caption: 'Engineering advanced industrial control solutions that drive efficiency, reliability, and innovation.',
  actionBtn: { children: 'Contact Us', href: CONTACT_US_PATH },
  // secondaryBtn: { children: 'Explore Blocks', href: SECTION_PATH },
  features: [
    {
      icon: 'tabler-building-factory',
      title: 'Who We Are',
      content:
        'Be Control, founded in 2020, is a leading Syrian Engineering, Procurement, and Construction (EPC) company specializing in advanced industrial solutions.'
    },
    {
      icon: 'tabler-settings-cog',
      title: 'Engineering Expertise',
      content:
        'With decades of expertise in electronics, electrical power systems, and the information industry, Be Control integrates classic industrial control with modern technologies to deliver smart, reliable, and future-ready automation solutions.'
    },
    {
      icon: 'tabler-automation',
      title: 'Integrated Solutions',
      content:
        'Our work spans industrial automation, IIoT integration, digital transformation, and custom-designed control systems built to meet the evolving needs of today’s industries.'
    },
    {
      icon: 'tabler-award',
      title: 'Commitment to Quality',
      content: 'We are committed to innovation, quality, and long-term value for our clients.'
    }
  ]
};

export const feature21 = {
  heading: `Design Faster, Smarter with ${branding.brandName} Figma`,
  caption: 'Unlock Figma’s advanced tools for streamlined, scalable, and responsive SaaS UI design.',
  image: '/assets/images/graphics/ai/desktop1-light.svg',
  primaryBtn: { children: 'Free Figma', href: 'https://www.figma.com/community/file/1425095061180549847', ...linkProps },
  secondaryBtn: {
    children: 'Preview Pro Figma',
    href: 'https://www.figma.com/design/mlkXfeqxUKqIo0GQhPBqPb/SaasAble---UI-Kit---Preview-only?node-id=11-1833&t=JBHOIIEuYZpmN6v8-1',
    ...linkProps
  },
  features: [
    {
      animationDelay: 0.1,
      icon: 'tabler-components',
      title: 'Component Architecture'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-moon',
      title: 'Dark Mode'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brightness-auto',
      title: 'Auto Layout'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-accessible',
      title: 'WCAG Compliant'
    },
    {
      animationDelay: 0.1,
      icon: 'tabler-icons',
      title: 'Custom Icons'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-file-stack',
      title: 'Page Demos'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brand-matrix',
      title: 'Material 3 Guideline'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-click',
      title: 'Quick Customization'
    }
  ]
};

export const feature = {
  // heading: `What’s Inside of ${branding.brandName} Plus Version`,
  // features: [
  //   {
  //     image: '/assets/images/shared/react.svg',
  //     title: 'CRA JavaScript',
  //     content: 'Ensure accessibility with WCAG compliant design for browsing.'
  //   },
  //   {
  //     image: '/assets/images/shared/next-js.svg',
  //     title: 'Next.js JavaScript',
  //     content: 'Tailor typography for optimal readability across all screen sizes.'
  //   },
  //   {
  //     image: '/assets/images/shared/react.svg',
  //     title: 'CRA TypeScript',
  //     content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
  //   },
  //   {
  //     image: '/assets/images/shared/next-js.svg',
  //     title: 'Next.js TypeScript',
  //     content: 'Adjust content layout for visual coherence on various screen sizes.'
  //   },
  //   {
  //     image: '/assets/images/shared/figma.svg',
  //     title: 'Figma ',
  //     content: 'Boost visibility with SEO-friendly features for better search rankings.'
  //   },
  //   {
  //     title: 'Check Out Our Pricing Plan',
  //     content: 'Choose the plan that aligns with your SaaS product requirements.',
  //     actionBtn: { children: 'Pricing Plan', href: BUY_NOW_URL, ...linkProps }
  //   }
  // ]
};

export const feature7 = {
  heading: 'Real-Time Performance Insights',
  caption: 'Gain a competitive edge with real-time performance monitoring.',
  testimonials: [
    {
      image: '/assets/images/graphics/ai/graphics6-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Core Value',
          content: 'Unlock growth potential through continuous monitoring, enabling proactive strategies in a competitive landscape.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics8-light.svg',
      features: [
        {
          icon: 'tabler-route',
          title: 'Multi-Cloud Orchestration',
          content: 'Enhances flexibility and resilience in a multi-cloud environment.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics3-light.svg',
      features: [
        {
          icon: 'tabler-history',
          title: 'Story',
          content: 'Real-time performance insights empower teams to respond swiftly, optimizing operations and driving growth.'
        }
      ]
    }
  ],
  breadcrumbs: [{ title: 'Core Value' }, { title: 'Culture' }, { title: 'Story' }]
};

export const feature23 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  heading2: 'Growth',
  caption2: 'Our culture prioritizes continuous learning, encouraging personal and professional development. ',
  image: '/assets/images/graphics/default/feature23-light.png',
  primaryBtn: { children: 'Join  Our Team', href: '#' },

  features: [
    {
      icon: 'tabler-users',
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: 'tabler-star',
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    }
  ]
};

export const feature18 = {
  heading: 'Our Divisions',
  caption:
    'Delivering integrated engineering solutions across multiple industrial disciplines including design, maintenance, automation, EPC support, manufacturing, and safety compliance.',
  topics: [
    {
      icon: 'tabler-building',
      content:
        'Our Engineering Solutions division is dedicated to providing end-to-end engineering services for mechanical, electrical, civil, and process disciplines. We specialize in delivering industrial systems that prioritize safety, reliability, and efficiency, ensuring that your operations perform optimally in every aspect.',
      title: 'Engineering Solutions',
      title2: 'Design And Implementation Excellence',
      description:
        'End-to-end engineering services across mechanical, electrical, civil, and process disciplines, delivering safe and reliable industrial systems.',
      image: '/assets/images/graphics/default/engineering-solutions.webp',
      list: [
        { primary: 'Optimized system performance and efficiency' },
        { primary: 'Custom engineering for complex industrial needs' },
        { primary: 'Reduced downtime and integration errors' },
        { primary: 'Full compliance with international standards' }
      ],
      actionBtn: { children: 'Explore Division', href: DIVISION_PATH }
    },
    {
      icon: 'tabler-tools',
      content:
        'Our Industrial Maintenance Services team ensures that your assets continue to operate at peak performance. With a focus on preventive, corrective, and predictive maintenance, we offer tailored solutions to keep your industrial systems running smoothly, minimizing costly downtime and improving long-term reliability.',
      title: 'Industrial Maintenance Services',
      title2: 'Preventive & Predictive Maintenance',
      description:
        'Ensuring operational continuity through preventive, corrective, and predictive maintenance strategies for industrial assets.',
      image: '/assets/images/graphics/default/maintenance-services.webp',
      list: [
        { primary: 'Reduced unplanned downtime' },
        { primary: 'Extended equipment lifespan' },
        { primary: 'Lower maintenance costs' },
        { primary: 'Rapid response from expert technicians' }
      ],
      actionBtn: { children: 'Explore Division', href: DIVISION_PATH }
    },
    {
      icon: 'tabler-cpu',
      content:
        'Our Automation & Control Systems division brings intelligent solutions to industrial operations. We specialize in designing and integrating state-of-the-art systems such as PLC, SCADA, DCS, IoT, and robotics to streamline processes, improve decision-making, and enhance operational performance.',
      title: 'Automation & Control Systems',
      title2: 'Smart Industrial Automation',
      description: 'Design and integration of PLC, SCADA, DCS, IoT, and robotics systems for intelligent industrial operations.',
      image: '/assets/images/graphics/default/automation-control.webp',
      list: [
        { primary: 'Automated and optimized workflows' },
        { primary: 'Real-time monitoring and control' },
        { primary: 'Reduced human error and labor cost' },
        { primary: 'Industry 4.0-ready systems' }
      ],
      actionBtn: { children: 'Explore Division', href: DIVISION_PATH }
    },
    {
      icon: 'tabler-building-factory-2',
      content:
        'Our EPC Support services provide comprehensive support throughout the project lifecycle. From design to procurement and commissioning, we work closely with EPC contractors to streamline execution, reduce risks, and ensure a smooth, on-time project delivery.',
      title: 'EPC Support',
      title2: 'Engineering & Project Execution Support',
      description: 'Comprehensive support for EPC contractors including design, procurement coordination, supervision, and commissioning.',
      image: '/assets/images/graphics/default/epc.webp',
      list: [
        { primary: 'Faster project execution' },
        { primary: 'Reduced procurement complexity' },
        { primary: 'Improved coordination and communication' },
        { primary: 'Lower project risks and errors' }
      ],
      actionBtn: { children: 'Explore Division', href: DIVISION_PATH }
    },
    {
      icon: 'tabler-settings-cog',
      content:
        'Our Manufacturing Solutions division focuses on optimizing industrial production. By implementing lean manufacturing, process optimization, and advanced material handling systems, we enhance operational efficiency and reduce production costs, while maintaining high product quality standards.',
      title: 'Manufacturing Solutions',
      title2: 'Production Optimization & Efficiency',
      description: 'Improving industrial production through process optimization, lean manufacturing, and material handling systems.',
      image: '/assets/images/graphics/default/solutions.webp',
      list: [
        { primary: 'Increased production efficiency' },
        { primary: 'Reduced waste and cost' },
        { primary: 'Improved product quality' },
        { primary: 'Streamlined manufacturing workflows' }
      ],
      actionBtn: { children: 'Explore Division', href: DIVISION_PATH }
    },
    {
      icon: 'tabler-shield-check',
      content:
        'Ensuring a safe working environment is essential for any industrial operation. Our Safety & Compliance Services help companies meet international HSE standards, minimize operational risks, and create a culture of safety that protects both workers and assets.',
      title: 'Safety & Compliance Services',
      title2: 'Industrial Safety & HSE Solutions',
      description: 'Providing safety audits, risk assessments, and compliance systems aligned with international HSE standards.',
      image: '/assets/images/graphics/default/safety-compliance.webp',
      list: [
        { primary: 'Safer working environments' },
        { primary: 'Regulatory compliance assurance' },
        { primary: 'Reduced operational risk' },
        { primary: 'Improved safety culture' }
      ],
      actionBtn: { children: 'Explore Division', href: DIVISION_PATH }
    }
  ]
};
