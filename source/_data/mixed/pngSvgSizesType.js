const sizes = [16, 24, 32, 48, 96, 192, 256, 512];

const pngSizesTypeSvgType = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, type), SVG (type)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}`, type: 'image/png' },
      { href: '/assets/icons/svg/icon-16.svg', type: 'image/svg+xml' },
    ],
    permalink: `/mixed/png-svg-sizes-type/png-${size}-type-svg-type/`,
  };
});

const svgPngTypeSizesType = sizes.map((size) => {
  return {
    title: `SVG (type), PNG (${size}x${size}, type)`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg', type: 'image/svg+xml' },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}`, type: 'image/png' },
    ],
    permalink: `/mixed/png-svg-sizes-type/svg-type-png-${size}-type/`,
  };
});

const pngSvgAnyType = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size} w/o sizes w/o type), SVG (any, type)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png` },
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    permalink: `/mixed/png-svg-sizes-type/png-${size}-nosizes-notype-svg-any-type/`,
  };
});

const svgAnyTypePng = sizes.map((size) => {
  return {
    title: `SVG (any, type), PNG (${size}x${size} w/o sizes w/o type)`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
      { href: `/assets/icons/png/icon-${size}.png` },
    ],
    permalink: `/mixed/png-svg-sizes-type/svg-any-type-png-${size}-nosizes-notype/`,
  };
});

const pngSizesTypeSvgAnyType = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, type), SVG (any, type)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}`, type: 'image/png' },
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    permalink: `/mixed/png-svg-sizes-type/png-${size}-type-svg-any-type/`,
  };
});

const svgAnyTypePngSizesType = sizes.map((size) => {
  return {
    title: `SVG (any, type), PNG (${size}x${size}, type)`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}`, type: 'image/png' },
    ],
    permalink: `/mixed/png-svg-sizes-type/svg-any-type-png-${size}-type/`,
  };
});

module.exports = [
  ...pngSizesTypeSvgType,
  ...svgPngTypeSizesType,
  ...pngSvgAnyType,
  ...svgAnyTypePng,
  ...pngSizesTypeSvgAnyType,
  ...svgAnyTypePngSizesType,
];
