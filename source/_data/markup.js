const iconSets = [
  {
    id: 'ico-1',
    fileType: 'ICO',
    type: 'image/vnd.microsoft.icon',
    path: '/assets/icons/ico/icon.ico',
  },
  {
    id: 'ico-2',
    fileType: 'ICO',
    type: 'image/x-icon',
    path: '/assets/icons/ico/icon.ico',
  },
  {
    id: 'png',
    fileType: 'PNG',
    type: 'image/png',
    path: '/assets/icons/png/icon-16.png',
  },
  {
    id: 'jpg',
    fileType: 'JPEG',
    type: 'image/jpeg',
    path: '/assets/icons/jpg/icon-16.jpg',
  },
  {
    id: 'webp',
    fileType: 'WebP',
    type: 'image/webp',
    path: '/assets/icons/webp/icon-16.webp',
  },
  {
    id: 'avif',
    fileType: 'AVIF',
    type: 'image/avif',
    path: '/assets/icons/avif/icon-16.avif',
  },
  {
    id: 'jxl',
    fileType: 'JPEG XL',
    type: 'image/jxl',
    path: '/assets/icons/jxl/icon-16.jxl',
  },
];


const withShortcutWithType = iconSets.map(({ id, fileType, type, path }) => {
  return {
    title: `${fileType} (rel="shortcut icon" type="${type}")`,
    permalink: `/markup/shortcut-type/${id}/`,
    shortcut: true,
    type,
    path,
  };
});

const withShortcutWithoutType = iconSets.map(({ id, fileType, type, path }) => {
  return {
    title: `${fileType} (rel="shortcut icon")`,
    permalink: `/markup/shortcut/${id}/`,
    shortcut: true,
    type: null,
    path,
  };
});

const withoutShortcutWithType = iconSets.map(({ id, fileType, type, path }) => {
  return {
    title: `${fileType} (rel="icon" type="${type}")`,
    permalink: `/markup/type/${id}/`,
    shortcut: false,
    type,
    path,
  };
});

const withoutShortcutWithoutType = iconSets.map(({ id, fileType, type, path }) => {
  return {
    title: `${fileType} (rel="icon")`,
    permalink: `/markup/simple/${id}/`,
    shortcut: false,
    type: null,
    path,
  };
});

module.exports = [
  ...withShortcutWithType,
  ...withShortcutWithoutType,
  ...withoutShortcutWithType,
  ...withoutShortcutWithoutType,
];
