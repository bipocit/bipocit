module.exports = () => ({
  plugins: [
    require("postcss-preset-env")({
      stage: 0,
    }),
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    // require("@fullhuman/postcss-purgecss")({
    //   content: ["./src/**/*.js"],
    //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    //   whitelist: ['html', 'body', 'gatsby-focus-wrapper']
    // }),
    require("cssnano")({
      preset: "default",
    }),
  ],
})
