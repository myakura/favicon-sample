export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "source/assets/": "assets/" });

  return {
    dir: {
      input: 'source/content',
      includes: '_includes',
      data: '_data',
    },
  };
};
