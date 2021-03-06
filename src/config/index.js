module.exports = {
  title: 'Ahmad Kabakibi | Software Engineer',
  keywords:
    'Ahmad Kabakibi, a.kabakibi, kabakibi, software engineer, full-stack engineer, front-end engineer, web developer, hybrid apps, node.js, javascript,back-end engineer',
  url: 'https://akabakibi.com',
  language: '',
  description: '',
  Language: 'en_US',
  email: 'ahmadkbakibi@gmail.com',
  googleAnalyticsID: 'UA-97011977-1',
  googleVerification: 'R2QNBj6YqmoSgaBMSPwNvuH5BU7snbjhbzcFBdn7uTE',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/AhmadKabakibi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ahmadkabakibi/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AhmadKabakibi',
    },
  ],
  headerHeight: 100,
  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Projects',
      url: '#projectCase',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }
  },
}
