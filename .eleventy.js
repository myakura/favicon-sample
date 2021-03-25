module.exports = function (eleventyConfig) {
  
  return {
    dir: {
      input: 'source/content',
      includes: '../_includes',
      data: '../_data',
    },
  };
};
