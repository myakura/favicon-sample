module.exports = [
  {
    title: 'PNG (sizes=""), SVG',
    icons: [
      { href: '/assets/icons/png/icon-16.png', sizes: '' },
      { href: '/assets/icons/svg/icon-16.svg' },
    ],
    permalink: '/svg-sizes/other/png-empty-svg/',
  },
  {
    title: 'SVG, PNG (sizes="")',
    icons: [
      { href: '/assets/icons/svg/icon-16.svg' },
      { href: '/assets/icons/png/icon-16.png', sizes: '' },
    ],
    permalink: '/svg-sizes/other/svg-png-empty/',
  },

  {
    title: 'PNG (sizes=""), SVG (any)',
    icons: [
      { href: '/assets/icons/png/icon-16.png', sizes: '' },
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any' },
    ],
    permalink: '/svg-sizes/other/png-empty-svg-any/',
  },
  {
    title: 'SVG (any), PNG (sizes="")',
    icons: [
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any' },
      { href: '/assets/icons/png/icon-16.png', sizes: '' },
    ],
    permalink: '/svg-sizes/other/svg-any-png-empty/',
  },
];
