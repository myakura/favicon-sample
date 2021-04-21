const sizes = [16, 24, 32, 48, 64, 96, 128, 144, 180, 192, 256];

const singleImageIco = sizes.map(size => {
  return {
    title: `ICO (${size}×${size})`,
    iconPath: `/assets/icons/ico-single/icon-${size}.ico`,
    permalink: `/format/ico-single/${size}/`,
  }
})

module.exports = singleImageIco;
