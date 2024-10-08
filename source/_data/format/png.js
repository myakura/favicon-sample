const sizes = [
  16, 24, 32, 48, 64, 96, 128, 144, 180, 192, 256, 512, 1024, 2048, 4096,
];

const { label, ext, dir } = { label: 'PNG', ext: 'png', dir: 'png' };

export default sizes.map((size) => {
  return {
    title: `${label} (${size}×${size})`,
    icons: [
      { href: `/assets/icons/${dir}/icon-${size}.${ext}` },
    ],
    permalink: `/format/${dir}/${size}/`,
  };
});
