module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'source/assets/icons/': 'assets/icons' });

  return {
    dir: {
      input: 'source/content',
      includes: '../_includes',
      data: '../_data',
    },
  };
};
