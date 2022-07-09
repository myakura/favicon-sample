const sizes = [
  16, 24, 32, 48, 64, 96, 128, 144, 180, 192, 256,
];

const { label, ext, dir } = { label: 'ICO', ext: 'ico', dir: 'ico-single' };

module.exports = sizes.map((size) => {
  return {
    title: `${label} (${size}×${size})`,
    icons: [
      { href: `/assets/icons/${dir}/icon-${size}.${ext}` },
    ],
    permalink: `/format/${dir}/${size}/`,
  };
});
