const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["dtogetherca-backend-production.up.railway.app", "localhost"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
