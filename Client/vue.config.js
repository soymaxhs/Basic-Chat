const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:3000/",
  outputDir: path.resolve(__dirname, "../Server/public"),
});
