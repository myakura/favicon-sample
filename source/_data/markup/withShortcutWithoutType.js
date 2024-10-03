const iconSets = [
  {
    id: 'ico-1',
    fileType: 'ICO',
    type: 'image/vnd.microsoft.icon',
    href: '/assets/icons/ico/icon.ico',
  },
  {
    id: 'ico-2',
    fileType: 'ICO',
    type: 'image/x-icon',
    href: '/assets/icons/ico/icon.ico',
  },
  {
    id: 'png',
    fileType: 'PNG',
    type: 'image/png',
    href: '/assets/icons/png/icon-16.png',
  },
  {
    id: 'jpg',
    fileType: 'JPEG',
    type: 'image/jpeg',
    href: '/assets/icons/jpg/icon-16.jpg',
  },
  {
    id: 'webp',
    fileType: 'WebP',
    type: 'image/webp',
    href: '/assets/icons/webp/icon-16.webp',
  },
  {
    id: 'avif',
    fileType: 'AVIF',
    type: 'image/avif',
    href: '/assets/icons/avif/icon-16.avif',
  },
  {
    id: 'jxl',
    fileType: 'JPEG XL',
    type: 'image/jxl',
    href: '/assets/icons/jxl/icon-16.jxl',
  },
  {
    id: 'svg',
    fileType: 'SVG',
    type: 'image/svg+xml',
    href: '/assets/icons/svg/icon-16.svg',
  },
];

export default iconSets.map(({ id, fileType, type, href }) => {
  return {
    title: `${fileType} (rel="shortcut icon")`,
    icons: [
      { rel: 'shortcut icon', href },
    ],
    permalink: `/markup/with-shortcut-without-type/${id}/`,
  };
});
