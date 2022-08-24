const sizes = [16, 24, 32, 48, 96, 192, 256, 512];

const pngSizesIco = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), ICO`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: '/assets/icons/ico/icon.ico' },
    ],
    permalink: `/sizes/png-ico/png-${size}-ico/`,
  };
});

const icoPngSizes = sizes.map((size) => {
  return {
    title: `ICO, PNG (${size}x${size})`,
    icons: [
      { href: '/assets/icons/ico/icon.ico' },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
    ],
    permalink: `/sizes/png-ico/ico-png-${size}/`,
  };
});

const pngIcoAny = sizes.map((size) => {
  return {
    title: 'PNG, ICO (any)',
    icons: [
      { href: `/assets/icons/png/icon-${size}.png` },
      { href: '/assets/icons/ico/icon.ico', sizes: 'any' },
    ],
    permalink: '/sizes/png-ico/png-ico-any/',
  };
});

const icoAnyPng = sizes.map((size) => {
  return {
    title: 'ICO (any), PNG',
    icons: [
      { href: '/assets/icons/ico/icon.ico', sizes: 'any' },
      { href: `/assets/icons/png/icon-${size}.png` },
    ],
    permalink: '/sizes/png-ico/ico-any-png/',
  };
});

const pngSizesIcoAny = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), ICO (any)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: '/assets/icons/ico/icon.ico', sizes: 'any' },
    ],
    permalink: `/sizes/png-ico/png-${size}-ico-any/`,
  };
});

const icoAnyPngSizes = sizes.map((size) => {
  return {
    title: `ICO (any), PNG (${size}x${size})`,
    icons: [
      { href: '/assets/icons/ico/icon.ico', sizes: 'any' },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
    ],
    permalink: `/sizes/png-ico/ico-any-png-${size}/`,
  };
});

module.exports = [
  ...pngSizesIco,
  ...icoPngSizes,
  ...pngIcoAny,
  ...icoAnyPng,
  ...pngSizesIcoAny,
  ...icoAnyPngSizes,
];
