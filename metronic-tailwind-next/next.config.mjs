/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add a rule to handle font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/fonts/[name].[ext]',
            publicPath: '/_next/static/fonts/',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
