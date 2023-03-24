const EleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const {EleventyHtmlBasePlugin} = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy({"src/static/theme/favicon.ico": "/favicon.ico"});

  return {
    dir: {
      input: "src",
      output: "_site"
    },
  }
}
