module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|md|mdx|ts|tsx)"],
  logLevel: "debug",
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
};
