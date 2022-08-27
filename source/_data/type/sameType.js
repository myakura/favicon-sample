const sizes = [16, 32, 48];

const sameType12 = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, white, type), PNG (${size}x${size}, black, type)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, type: 'image/png' },
      { href: `/assets/icons/png-dark/icon-${size}.png`, type: 'image/png' },

    ],
    permalink: `/type/same-size/png-${size}-white-type-png-${size}-black-type/`,
  };
});

const sameType21 = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, black, type), PNG (${size}x${size}, white, type)`,
    icons: [
      { href: `/assets/icons/png-dark/icon-${size}.png`, type: 'image/png' },
      { href: `/assets/icons/png/icon-${size}.png`, type: 'image/png' },

    ],
    permalink: `/type/same-size/png-${size}-black-type-png-${size}-white-type/`,
  };
});

const pngTypePng = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, white, type), PNG (${size}x${size}, black)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png`, type: 'image/png' },
      { href: `/assets/icons/png-dark/icon-${size}.png` },

    ],
    permalink: `/sizes/same-size/png-${size}-white-type-png-${size}-black/`,
  };
});

const pngPngType = sizes.map((size) => {
  return {
    title: `PNG (${size}x${size}, white), PNG (${size}x${size}, black, type)`,
    icons: [
      { href: `/assets/icons/png/icon-${size}.png` },
      { href: `/assets/icons/png-dark/icon-${size}.png`, type: 'image/png' },

    ],
    permalink: `/sizes/same-size/png-${size}-white-png-${size}-black-type/`,
  };
});

module.exports = [
  ...sameType12,
  ...sameType21,
  ...pngTypePng,
  ...pngPngType,
];
