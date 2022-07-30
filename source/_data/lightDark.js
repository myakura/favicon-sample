module.exports = [
  {
    title: 'PNG light mode',
    icons: [
      {
        href: '/assets/icons/png/icon-16.png',
        media: '(prefers-color-scheme: light)',
      },
    ],
    permalink: '/light-dark/light/',
  },
  {
    title: 'PNG dark mode',
    icons: [
      {
        href: '/assets/icons/png-dark/icon-16.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    permalink: '/light-dark/dark/',
  },
  {
    title: 'PNG, PNG light mode',
    icons: [
      { href: '/assets/icons/png-dark/icon-16.png' },
      {
        href: '/assets/icons/png/icon-16.png',
        media: '(prefers-color-scheme: light)',
      },
    ],
    permalink: '/light-dark/nomedia-light/',
  },
  {
    title: 'PNG, PNG dark mode',
    icons: [
      { href: '/assets/icons/png/icon-16.png' },
      {
        href: '/assets/icons/png-dark/icon-16.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    permalink: '/light-dark/nomedia-dark/',
  },
  {
    title: 'PNG light mode, PNG dark mode',
    icons: [
      {
        href: '/assets/icons/png/icon-16.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        href: '/assets/icons/png-dark/icon-16.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    permalink: '/light-dark/light-dark/',
  },
  {
    title: 'PNG dark mode, PNG light mode',
    icons: [
      {
        href: '/assets/icons/png-dark/icon-16.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        href: '/assets/icons/png/icon-16.png',
        media: '(prefers-color-scheme: light)',
      },
    ],
    permalink: '/light-dark/dark-light/',
  },
];
