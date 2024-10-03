const sizeSets = [
  [16, 24, 32],
  [16, 32, 48],
  [16, 48, 96],
  [16, 96, 192],
  [16, 192, 256],
  [16, 256, 512],

  [32, 48, 96],
  [32, 96, 192],
  [32, 192, 256],
  [32, 256, 512],

  [48, 96, 192],
  [48, 192, 256],
  [48, 256, 512],

  [96, 192, 256],
  [96, 256, 512],

  [192, 256, 512],
];

export default sizeSets.map(([w1, w2, w3]) => {
  return {
    title: `PNG (${w1}x${w1}), PNG (${w2}x${w2}), PNG (${w3}x${w3})`,
    icons: [
      { href: `/assets/icons/png/icon-${w1}.png`, sizes: `${w1}x${w1}` },
      { href: `/assets/icons/png/icon-${w2}.png`, sizes: `${w2}x${w2}` },
      { href: `/assets/icons/png/icon-${w3}.png`, sizes: `${w3}x${w3}` },
    ],
    permalink: `/sizes/3sizes/png-${w1}-png-${w2}-png-${w3}/`,
  };
});
