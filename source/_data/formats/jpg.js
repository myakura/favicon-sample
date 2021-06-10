const sizes = [
  16, 24, 32, 48, 64, 96, 128, 144, 180, 192, 256, 512, 1024, 2048, 4096,
];

const { label, ext, dir } = { label: 'JPEG', ext: 'jpg', dir: 'jpg' };

module.exports = sizes.map((size) => {
  return {
    title: `${label} (${size}×${size})`,
    icons: [
      { iconPath: `/assets/icons/${dir}/icon-${size}.${ext}` },
    ],
    permalink: `/format/${dir}/${size}/`,
  };
});
