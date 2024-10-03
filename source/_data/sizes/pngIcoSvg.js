const sizes = [16, 24, 32, 48, 96, 192, 256, 512];

const pngSizesIcoSvg = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), ICO, SVG`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: '/assets/icons/ico/icon.ico' },
      { href: '/assets/icons/svg/icon-16.svg' },
    ],
    permalink: `/sizes/png-ico-svg/png-${size}-ico-svg/`,
  };
});

const svgIcoPngSizes = sizes.map((size) => {
  return {
    title: `SVG, ICO, PNG (${size}x${size})`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg' },
      { href: '/assets/icons/ico/icon.ico' },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
    ],
    permalink: `/sizes/png-ico-svg/svg-ico-png-${size}/`,
  };
});

const pngSizesIcoAnySvgAny = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}), ICO (any), SVG (any)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: '/assets/icons/ico/icon.ico', sizes: 'any' },
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any' },
    ],
    permalink: `/sizes/png-ico-svg/png-${size}-ico-any-svg-any/`,
  };
});

const svgAnyIcoAnyPngSizes = sizes.map((size) => {
  return {
    title: `SVG (any), ICO (any), PNG (${size}x${size})`,
    icons: [
      { href: '/assets/icons/svg/icon-16.svg', sizes: 'any' },
      { href: '/assets/icons/ico/icon.ico', sizes: 'any' },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
    ],
    permalink: `/sizes/png-ico-svg/svg-any-ico-any-png-${size}/`,
  };
});

export default [
  ...pngSizesIcoSvg,
  ...svgIcoPngSizes,
  ...pngSizesIcoAnySvgAny,
  ...svgAnyIcoAnyPngSizes,
];
