import { createDataUrl } from '../../_lib/createDataUrl.js';

export default [
  {
    title: 'ICO in data: URL',
    icons: [
      { href: createDataUrl('../assets/icons/ico/icon.ico', 'image/vnd.microsoft.icon') },
    ],
    permalink: '/data-url/ico/',
  },
  {
    title: 'PNG (16×16) in data: URL',
    icons: [
      { href: createDataUrl('../assets/icons/png/icon-16.png', 'image/png') },
    ],
    permalink: '/data-url/png/',
  },
  {
    title: 'PNG (16×16) in data: URL, SVG in data: URL',
    icons: [
      {
        href: createDataUrl('../assets/icons/png/icon-16.png', 'image/png'),
        type: 'image/png',
        sizes: '16x16',
      },
      {
        href: createDataUrl('../assets/icons/svg/icon-16.svg', 'image/svg+xml'),
        type: 'image/svg+xml',
      },
    ],
    permalink: '/data-url/png-svg/',
  },
];
