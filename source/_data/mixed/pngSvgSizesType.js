const sizes = [16, 32, 48];

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
    title: `PNG (${size}x${size} w/o sizes), SVG (any, type)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png` },
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    permalink: `/mixed/png-svg-sizes-type/png-${size}-nosizes-svg-any-type/`,
  };
});

const svgAnyTypePng = sizes.map((size) => {
  return {
    title: `SVG (any, type), PNG (${size}x${size} w/o sizes)`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
      { href: `/assets/icons/png/icon-${size}.png` },
    ],
    permalink: `/mixed/png-svg-sizes-type/svg-any-type-png-${size}-nosizes/`,
  };
});

const pngSizesSvgAnyType = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), SVG (any, type)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    permalink: `/mixed/png-svg-sizes-type/png-${size}-nosizes-notype-svg-any-type/`,
  };
});

const svgAnyTypePngSizes = sizes.map((size) => {
  return {
    title: `SVG (any, type), PNG (${size}x${size})`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
    ],
    permalink: `/mixed/png-svg-sizes-type/svg-any-type-png-${size}-nosizes-notype/`,
  };
});

const pngTypeSvgAnyType = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size} w/o sizes, type), SVG (any, type)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, type: 'image/png' },
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    permalink: `/mixed/png-svg-sizes-type/png-${size}-nosizes-type-svg-any-type/`,
  };
});

const svgAnyTypePngType = sizes.map((size) => {
  return {
    title: `SVG (any, type), PNG (${size}x${size} w/o sizes, type)`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any', type: 'image/svg+xml' },
      { href: `/assets/icons/png/icon-${size}.png`, type: 'image/png' },
    ],
    permalink: `/mixed/png-svg-sizes-type/svg-any-type-png-${size}-nosizes-type/`,
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
  ...pngSizesSvgAnyType,
  ...svgAnyTypePngSizes,
  ...pngTypeSvgAnyType,
  ...svgAnyTypePngType,
  ...pngSizesTypeSvgAnyType,
  ...svgAnyTypePngSizesType,
];
