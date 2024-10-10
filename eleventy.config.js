import pluginWebc from '@11ty/eleventy-plugin-webc';

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.addPassthroughCopy({ 'source/assets/icons/': 'assets/icons' });

  return {
    dir: {
      input: 'source/content',
      includes: '../_includes',
      data: '../_data',
    },
  };
};
