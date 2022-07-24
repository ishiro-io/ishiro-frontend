/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true
};

const { withExpo } = require("@expo/next-adapter");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "solito",
  "dripsy",
  "@dripsy/core",
  "moti",
  "@motify/core",
  "@motify/components",
  "shared"
]);

module.exports = withPlugins(
  [
    withImages,
    withFonts,
    [
      withTM,
      {
        images: {
          disableStaticImages: true
        }
      }
    ],
    [withExpo, { projectRoot: __dirname }]
  ],
  nextConfig
);
