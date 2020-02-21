const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias.src = path.resolve(__dirname, "src/");

    // WebWorker
    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: "worker-loader",
      options: {
        // inline: true,
        name: "static/[hash].worker.js",
        publicPath: "/_next/"
      }
    });
    // Overcome webpack referencing `window` in chunks
    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;
    return config;
  }
};
