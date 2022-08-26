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

module.exports = [
  ...pngSizesIcoAnySvgType,
];
