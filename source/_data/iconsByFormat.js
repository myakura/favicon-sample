const sizes = [16, 24, 32, 48, 64, 96, 128, 144, 180, 192, 256, 512, 1024, 2048, 4096];
const formats = [
  { label: 'PNG', ext: 'png', dir: 'png' },
  { label: 'JPEG', ext: 'jpg', dir: 'jpg' },
  { label: 'WebP', ext: 'webp', dir: 'webp' },
  { label: 'AVIF', ext: 'avif', dir: 'avif' },
  { label: 'JPEG XL', ext: 'jxl', dir: 'jxl' },
  { label: 'SVG', ext: 'svg', dir: 'svg' },
];

const iconsByFormat = [...formats.values()].map(({ label, ext, dir }) => {
  return sizes.map((size) => {
    return {
      title: `${label} (${size}×${size})`,
      iconPath: `/assets/icons/${dir}/icon-${size}.${ext}`,
      permalink: `/format/${dir}/${size}/`,
    };
  });
}).flat();

module.exports = iconsByFormat;
