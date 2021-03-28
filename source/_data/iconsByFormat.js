const sizes = [16, 24, 32, 48, 64, 96, 128, 144, 180, 192, 256, 512, 1024];
const formats = [
  { label: 'PNG', ext: 'png' },
  { label: 'JPEG', ext: 'jpg' },
  { label: 'WebP', ext: 'webp' },
  { label: 'AVIF', ext: 'avif' },
  { label: 'JPEG XL', ext: 'jxl' },
];

const iconsByFormat = [...formats.values()].map(({ label, ext }) => {
  return sizes.map((size) => {
    return {
      title: `${label} favicon (${size}×${size})`,
      path: `/assets/icons/${ext}/icon-${size}.${ext}`,
      permalink: `/format/${ext}/${size}/`,
    };
  });
}).flat();

module.exports = iconsByFormat;
