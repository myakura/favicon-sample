const iconSets = [
  {
    name: 'ico-1',
    type: 'image/vnd.microsoft.icon',
    path: '/assets/icons/ico/icon.ico',
  },
  {
    name: 'ico-2',
    type: 'image/x-icon',
    path: '/assets/icons/ico/icon.ico',
  },
  {
    name: 'png',
    type: 'image/png',
    path: '/assets/icons/png/icon-16.png',
  },
  {
    name: 'jpg',
    type: 'image/jpeg',
    path: '/assets/icons/jpg/icon-16.jpg',
  },
  {
    name: 'webp',
    type: 'image/webp',
    path: '/assets/icons/webp/icon-16.webp',
  },
  {
    name: 'avif',
    type: 'image/avif',
    path: '/assets/icons/avif/icon-16.avif',
  },
  {
    name: 'jxl',
    type: 'image/jxl',
    path: '/assets/icons/jxl/icon-16.jxl',
  },
];

const withShortcutWithType = iconSets.map(({ name, type, path }) => {
  return {
    title: name,
    permalink: `/markup/shortcut-type/${name}/`,
    shortcut: true,
    type,
    path,
  };
});

const withShortcutWithoutType = iconSets.map(({ name, type, path }) => {
  return {
    title: name,
    permalink: `/markup/shortcut/${name}/`,
    shortcut: true,
    type: null,
    path,
  };
});

const withoutShortcutWithType = iconSets.map(({ name, type, path }) => {
  return {
    title: name,
    permalink: `/markup/type/${name}/`,
    shortcut: false,
    type,
    path,
  };
});

const withoutShortcutWithoutType = iconSets.map(({ name, type, path }) => {
  return {
    title: name,
    permalink: `/markup/simple/${name}/`,
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
