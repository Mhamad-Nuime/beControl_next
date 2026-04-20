// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Frequently Asked Questions',
  caption: `Answers to common queries about ${branding.brandName} industrial control and automation solutions.`,
  defaultExpanded: 'General',
  faqList: [
    {
      question: `What industries does ${branding.brandName} serve?`,
      answer: `${branding.brandName} provides industrial control and automation solutions across a wide range of industries including manufacturing, energy, oil & gas, water treatment, and infrastructure. Our systems are designed to improve efficiency, safety, and reliability in industrial operations.`,
      category: 'General'
    },
    {
      question: `What types of solutions does ${branding.brandName} offer?`,
      answer: `${branding.brandName} delivers end-to-end solutions including PLC programming, SCADA systems, control panel design, industrial automation, process optimization, and system integration tailored to your operational needs.`,
      category: 'General'
    },
    {
      question: `Can ${branding.brandName} customize solutions for specific projects?`,
      answer: {
        content: `Yes, all our solutions are fully customizable to meet specific industrial requirements.`,
        type: 'list',
        data: [
          { primary: 'Custom PLC & SCADA development' },
          { primary: 'Tailored control panel design' },
          { primary: 'Integration with existing systems' }
        ]
      },
      category: 'General'
    },
    {
      question: `Does ${branding.brandName} provide system integration services?`,
      answer:
        'Yes, we specialize in integrating new automation systems with existing infrastructure, ensuring seamless communication between machines, control systems, and enterprise-level software.',
      category: 'General'
    },
    {
      question: 'Do you provide on-site installation and commissioning?',
      answer: 'Yes, our team offers on-site installation, testing, and commissioning services to ensure that all systems operate efficiently and meet project specifications.',
      category: 'General'
    },
    {
      question: `What is included in ${branding.brandName} project delivery?`,
      answer: {
        content: 'Our project delivery includes complete lifecycle support:',
        type: 'list',
        data: [
          { primary: 'System design and engineering' },
          { primary: 'Hardware and software implementation' },
          { primary: 'Testing and commissioning' },
          { primary: 'Documentation and training' }
        ]
      },
      category: 'Services'
    },
    {
      question: `Do you offer maintenance and support services?`,
      answer: {
        content:
          `${branding.brandName} provides ongoing maintenance and technical support to ensure optimal system performance and minimal downtime.`,
        type: 'list',
        data: [
          { primary: 'Preventive maintenance' },
          { primary: 'Remote and on-site support' },
          { primary: 'System upgrades and troubleshooting' }
        ]
      },
      category: 'Services'
    },
    {
      question: 'How are your solutions priced?',
      answer:
        'Pricing depends on project scope, system complexity, hardware requirements, and level of customization. We provide detailed quotations after assessing your specific needs.',
      category: 'Pricing'
    },
    {
      question: 'Do you provide training for operators and engineers?',
      answer: {
        content:
          'Yes, we offer comprehensive training programs to ensure your team can effectively operate and maintain the systems.',
        type: 'list',
        data: [
          { primary: 'On-site training sessions' },
          { primary: 'Operational manuals and documentation' },
          { primary: 'Hands-on system training' }
        ]
      },
      category: 'Support & Training'
    },
    {
      question: 'What kind of support response times do you offer?',
      answer: {
        content:
          'We provide responsive technical support based on service agreements and project requirements.',
        type: 'list',
        data: [
          { primary: 'Remote support for quick issue resolution' },
          { primary: 'On-site support when required' },
          { primary: 'Priority response options available' }
        ]
      },
      category: 'Support & Training'
    }
  ],
  getInTouch: {
    link: { children: 'Get in Touch', href: branding.company.socialLink.support, target: '_blank', rel: 'noopener noreferrer' }
  },
  categories: ['General', 'Services', 'Pricing', 'Support & Training'],
  activeCategory: 'General'
};