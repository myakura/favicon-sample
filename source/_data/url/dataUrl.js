const { createDataUrl } = require('../../_lib/createDataUrl.js');

module.exports = [
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
];
