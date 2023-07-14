const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["https://medusa-dtogether.s3.amazonaws.com", "dtogetherca-backend-production.up.railway.app", "medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost"],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
