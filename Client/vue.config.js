const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.PROJECT_NAME + "/"
      : "/",
  outputDir: path.resolve(__dirname, "../Server/public"),
});
