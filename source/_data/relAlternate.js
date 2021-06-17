module.exports = [
  {
    title: 'ICO, PNG',
    icons: [
      { href: '/assets/icons/ico/icon.ico' },
      { href: '/assets/icons/png/icon-16.png' },
    ],
    permalink: '/rel-alternate/ico-png/',
  },
  {
    title: 'ICO, PNG (rel="alternate icon")',
    icons: [
      { href: '/assets/icons/ico/icon.ico' },
      { href: '/assets/icons/png/icon-16.png', rel: 'alternate icon' },
    ],
    permalink: '/rel-alternate/ico-png-alternate/',
  },

  {
    title: 'PNG, SVG',
    icons: [
      { href: '/assets/icons/png/icon-16.png' },
      { href: '/assets/icons/svg/icon-16.svg' },
    ],
    permalink: '/rel-alternate/png-svg/',
  },
  {
    title: 'PNG, SVG (rel="alternate icon")',
    icons: [
      { href: '/assets/icons/png/icon-16.png' },
      { href: '/assets/icons/svg/icon-16.svg', rel: 'alternate icon' },
    ],
    permalink: '/rel-alternate/png-svg-alternate/',
  },
]
