const icoSizes = [16, 24, 32, 48, 256];

function createPageData(sizesArray) {
  const sizesValue = sizesArray.map((size) => `${size}x${size}`).join(' ');
  return {
    title: `ICO (${sizesValue})`,
    icons: [
      { href: '/assets/icons/ico/icon.ico', sizes: sizesValue },
    ],
    permalink: `/sizes/ico-sizes/sizes-${sizesArray.join('-')}/`,
  }
}

const allSizes = createPageData(icoSizes);

const partialSizes = icoSizes.map((size, index) => {
  const sizes = icoSizes.filter((_, i) => i !== index);
  return createPageData(sizes);
})

module.exports = [
  allSizes,
  ...partialSizes,
];
