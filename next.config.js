const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack(config, { dev, isServer }) {
    // Enable CSS modules and PostCSS
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: dev
                ? '[name]__[local]___[hash:base64:5]'
                : '[hash:base64:5]',
            },
          },
        },
        'postcss-loader',
      ],
    });

    // Resolve aliases
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
  },
};
