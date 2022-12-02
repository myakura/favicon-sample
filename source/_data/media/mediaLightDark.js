module.exports = [
  {
    title: 'PNG light mode',
    icons: [
      { href: '/assets/icons/png/icon-16.png', media: '(prefers-color-scheme: light)' },
    ],
    permalink: '/media/light-dark/light/',
  },
  {
    title: 'PNG dark mode',
    icons: [
      { href: '/assets/icons/png-dark/icon-16.png', media: '(prefers-color-scheme: dark)' },
    ],
    permalink: '/media/light-dark/dark/',
  },
  {
    title: 'PNG, PNG light mode',
    icons: [
      { href: '/assets/icons/png-dark/icon-16.png' },
      { href: '/assets/icons/png/icon-16.png', media: '(prefers-color-scheme: light)' },
    ],
    permalink: '/media/light-dark/nomedia-light/',
  },
  {
    title: 'PNG light mode, PNG',
    icons: [
      { href: '/assets/icons/png/icon-16.png', media: '(prefers-color-scheme: light)' },
      { href: '/assets/icons/png-dark/icon-16.png' },
    ],
    permalink: '/media/light-dark/light-nomedia/',
  },
  {
    title: 'PNG, PNG dark mode',
    icons: [
      { href: '/assets/icons/png/icon-16.png' },
      { href: '/assets/icons/png-dark/icon-16.png', media: '(prefers-color-scheme: dark)' },
    ],
    permalink: '/media/light-dark/nomedia-dark/',
  },
  {
    title: 'PNG dark mode, PNG',
    icons: [
      { href: '/assets/icons/png-dark/icon-16.png', media: '(prefers-color-scheme: dark)' },
      { href: '/assets/icons/png/icon-16.png' },
    ],
    permalink: '/media/light-dark/dark-nomedia/',
  },
  {
    title: 'PNG light mode, PNG dark mode',
    icons: [
      { href: '/assets/icons/png/icon-16.png', media: '(prefers-color-scheme: light)' },
      { href: '/assets/icons/png-dark/icon-16.png', media: '(prefers-color-scheme: dark)' },
    ],
    permalink: '/media/light-dark/media/light-dark/',
  },
  {
    title: 'PNG dark mode, PNG light mode',
    icons: [
      { href: '/assets/icons/png-dark/icon-16.png', media: '(prefers-color-scheme: dark)' },
      { href: '/assets/icons/png/icon-16.png', media: '(prefers-color-scheme: light)' },
    ],
    permalink: '/media/light-dark/dark-light/',
  },
  {
    title: 'PNG light mode, PNG dark mode, PNG',
    icons: [
      { href: '/assets/icons/png/icon-16.png', media: '(prefers-color-scheme: light)' },
      { href: '/assets/icons/png-dark/icon-16.png', media: '(prefers-color-scheme: dark)' },
      { href: '/assets/icons/png-dark/icon-24.png' },
    ],
    permalink: '/media/light-dark/light-dark-nomedia/',
  },
  {
    title: 'PNG dark mode, PNG light mode, PNG',
    icons: [
      { href: '/assets/icons/png-dark/icon-16.png', media: '(prefers-color-scheme: dark)' },
      { href: '/assets/icons/png/icon-16.png', media: '(prefers-color-scheme: light)' },
      { href: '/assets/icons/png-dark/icon-24.png' },
    ],
    permalink: '/media/light-dark/dark-light-nomedia/',
  },
];
