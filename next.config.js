module.exports = {
  images: {
    domains: ['cdn.pixabay.com', 'pixabay.com', 'origohealth.net'],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
