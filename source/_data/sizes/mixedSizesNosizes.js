const sizeSets = [
  [16, 24],
  [16, 32],
  [16, 48],
  [16, 96],
  [16, 192],
  [16, 256],

  [32, 16],
  [32, 24],
  [32, 48],
  [32, 96],
  [32, 192],
  [32, 256],

  [48, 16],
  [48, 24],
  [48, 32],
  [48, 96],
  [48, 192],
  [48, 256],

  [96, 16],
  [96, 24],
  [96, 32],
  [96, 48],
  [96, 192],
  [96, 256],

  [192, 16],
  [192, 24],
  [192, 32],
  [192, 48],
  [192, 96],
  [192, 256],

  [256, 16],
  [256, 24],
  [256, 32],
  [256, 48],
  [256, 96],
  [256, 192],
];

const sizesNosizes = sizeSets.map(([w1, w2]) => {
  return {
    title: `PNG (${w1}x${w1}), PNG (${w2}x${w2})`,
    icons: [
      { href: `/assets/icons/png/icon-${w1}.png`, sizes: `${w1}x${w1}` },
      { href: `/assets/icons/png/icon-${w2}.png` },
    ],
    permalink: `/sizes/mixed-sizes-nosizes/png-${w1}-png-${w2}-nosizes/`,
  };
});

const nosizesSizes = sizeSets.map(([w1, w2]) => {
  return {
    title: `PNG (${w1}x${w1}), PNG (${w2}x${w2})`,
    icons: [
      { href: `/assets/icons/png/icon-${w1}.png` },
      { href: `/assets/icons/png/icon-${w2}.png`, sizes: `${w2}x${w2}` },
    ],
    permalink: `/sizes/mixed-sizes-nosizes/png-${w1}-nosizes-png-${w2}/`,
  };
});

export default [
  ...sizesNosizes,
  ...nosizesSizes,
];
