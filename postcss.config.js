import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  // plugins: [
  //   require("tailwindcss"),
  //   require("autoprefixer"),
  //   // Add other plugins here
  //   require("postcss-import"),
  //   require("postcss-nested"),
  //   // Ensure Tailwind is loaded last
  //   require("postcss-preset-env")({
  //     stage: 1,
  //     features: {
  //       "focus-within-pseudo-class": false,
  //     },
  //   }),
  // ],
};
