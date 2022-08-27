const sizes = [16, 32, 48];

const pngSizesIcoAnySvgType = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), ICO (any), SVG (type)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: `/assets/icons/ico/icon.ico`, sizes: 'any' },
      { href: '/assets/icons/svg/icon-16.svg', type: 'image/svg+xml' },
    ],
    permalink: `/mixed/png-ico-svg-sizes-type/png-${size}-ico-any-svg-type/`,
  };
});

const pngSizesIcoAnySvg = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), ICO (any), SVG`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: `/assets/icons/ico/icon.ico`, sizes: 'any' },
      { href: '/assets/icons/svg/icon-16.svg' },
    ],
    permalink: `/mixed/png-ico-svg-sizes-type/png-${size}-ico-any-svg/`,
  };
});

const pngSizesIcoSvg = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), ICO, SVG`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: `/assets/icons/ico/icon.ico` },
      { href: '/assets/icons/svg/icon-16.svg' },
    ],
    permalink: `/mixed/png-ico-svg-sizes-type/png-${size}-ico-svg/`,
  };
});

module.exports = [
  ...pngSizesIcoAnySvgType,
  ...pngSizesIcoAnySvg,
  ...pngSizesIcoSvg,
];
