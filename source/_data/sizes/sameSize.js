const sizes = [16, 32, 48];

const sameSize12 = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, white), PNG (${size}x${size}, black)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: `/assets/icons/png-dark/icon-${size}.png`, sizes: `${size}x${size}` },

    ],
    permalink: `/sizes/same-size/png-${size}-white-png-${size}-black/`,
  };
});

const sameSize21 = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, black), PNG (${size}x${size}, white)`,
    icons: [
      { href: `/assets/icons/png-dark/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },

    ],
    permalink: `/sizes/same-size/png-${size}-black-png-${size}-white/`,
  };
});

const pngSizesPng = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, white), PNG (${size}x${size}, black)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, sizes: `${size}x${size}` },
      { href: `/assets/icons/png-dark/icon-${size}.png` },

    ],
    permalink: `/sizes/same-size/png-${size}-white-png-${size}-nosizes-black/`,
  };
});

const pngPngSizes = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, white), PNG (${size}x${size}, black)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png` },
      { href: `/assets/icons/png-dark/icon-${size}.png`, sizes: `${size}x${size}` },

    ],
    permalink: `/sizes/same-size/png-${size}-nosizes-white-png-${size}-black/`,
  };
});

export default [
  ...sameSize12,
  ...sameSize21,
  ...pngSizesPng,
  ...pngPngSizes,
];
