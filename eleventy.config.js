const EleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const {EleventyHtmlBasePlugin} = require("@11ty/eleventy");
const EleventyImagePlugin = require("@11ty/eleventy-img");


async function imageShortcode(src, alt, sizes) {
  const url = "images/"
  const imageSrc = "./src/" + url + src

  let metadata = await EleventyImagePlugin(imageSrc, {
    widths: [1200],
    formats: ["webp", "jpg"],
    outputDir: "./_site/images",
    urlPath: "/images/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return EleventyImagePlugin.generateHTML(
    metadata,
    imageAttributes, 
    {whitespaceMode: "inline"},
  );
}


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyNavigationPlugin);

  // eleventyConfig.addPassthroughCopy("src/static");
  // eleventyConfig.addPassthroughCopy({"src/static/theme/favicon.ico": "/favicon.ico"});
  eleventyConfig.addPassthroughCopy({ "src/images/calm.png": "images/calm.png" });

  eleventyConfig.addAsyncShortcode("image", imageShortcode);

  return {
    dir: {
      input: "src",
      output: "_site"
    },
  }
}
