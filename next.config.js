/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: "http://localhost:3000/",
    NEXTAUTH_SECRET: "RaK5+5gCa2Mx8jq6KW/UAAIq/nLiTWZ7Tohkvzo8W3M=",
    mongoUri:
      "mongodb+srv://admin:UCUOVqKCS95Q7qVe@cluster0.jnb6d.mongodb.net/rose_dimat",
  },

  experimental: {
    serverComponentsExternalPackages: ["mongoose", "bcryptjs"],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },

      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

module.exports = nextConfig
