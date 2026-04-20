// @project
import branding from '@/branding.json';

export const contactUS = {
  heading: 'We’d love to hear from you',
  caption: 'Explore key statistics and trends shaping our understanding of the current landscape.',
  list: [
    {
      icon: '/assets/svg/landline.svg',
      title: 'Landline',
      content: 'Call our office in Damascus for general inquiries.',
      link: { children: 'Call Now', href: 'tel:+963116917409' }
    },
    {
      icon: '/assets/svg/phone.svg',
      title: 'Mobile',
      content: 'Reach us directly on our mobile number anytime.',
      link: { children: 'Call Now', href: 'tel:+963938112059' }
    },
    {
      icon: '/assets/svg/whatsapp.svg',
      title: 'WhatsApp',
      content: 'Chat with us on WhatsApp for quick support.',
      link: { children: 'Chat Now', href: 'https://wa.me/963967521129' }
    }
  ]
};
