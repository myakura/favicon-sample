const iconSets = [
  {
    id: 'ico-1',
    fileType: 'ICO',
    type: 'image/vnd.microsoft.icon',
    iconPath: '/assets/icons/ico/icon.ico',
  },
  {
    id: 'ico-2',
    fileType: 'ICO',
    type: 'image/x-icon',
    iconPath: '/assets/icons/ico/icon.ico',
  },
  {
    id: 'png',
    fileType: 'PNG',
    type: 'image/png',
    iconPath: '/assets/icons/png/icon-16.png',
  },
  {
    id: 'jpg',
    fileType: 'JPEG',
    type: 'image/jpeg',
    iconPath: '/assets/icons/jpg/icon-16.jpg',
  },
  {
    id: 'webp',
    fileType: 'WebP',
    type: 'image/webp',
    iconPath: '/assets/icons/webp/icon-16.webp',
  },
  {
    id: 'avif',
    fileType: 'AVIF',
    type: 'image/avif',
    iconPath: '/assets/icons/avif/icon-16.avif',
  },
  {
    id: 'jxl',
    fileType: 'JPEG XL',
    type: 'image/jxl',
    iconPath: '/assets/icons/jxl/icon-16.jxl',
  },
  {
    id: 'svg',
    fileType: 'SVG',
    type: 'image/svg+xml',
    iconPath: '/assets/icons/svg/icon-16.svg',
  },
];

module.exports = iconSets.map(({ id, fileType, type, iconPath }) => {
  return {
    title: `${fileType}`,
    icons: [
      { iconPath },
    ],
    permalink: `/markup/without-shortcut-without-type/${id}/`,
  };
});
