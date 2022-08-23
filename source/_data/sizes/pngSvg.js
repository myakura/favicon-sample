const sizes = [16, 24, 32, 48, 96, 192, 256, 512];

const pngSizesSvg = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), SVG`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: '/assets/icons/svg/icon-16.svg' },
    ],
    permalink: `/sizes/png-svg/png-${size}-svg/`,
  };
});

const svgPngSizes = sizes.map((size) => {
  return {
    title: `SVG, PNG (${size}x${size})`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg' },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
    ],
    permalink: `/sizes/png-svg/svg-png-${size}/`,
  };
});

const pngSizesSvgAny = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), SVG (any)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any' },
    ],
    permalink: `/sizes/png-svg/png-${size}-svg-any/`,
  };
});

const svgAnyPngSizes = sizes.map((size) => {
  return {
    title: `SVG (any), PNG (${size}x${size})`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any' },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
    ],
    permalink: `/sizes/png-svg/svg-any-png-${size}/`,
  };
});

module.exports = [
  ...pngSizesSvg,
  ...svgPngSizes,
  ...pngSizesSvgAny,
  ...svgAnyPngSizes,
];
