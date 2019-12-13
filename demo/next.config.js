const withCSS = require("@zeit/next-css");
const withSass = require('@zeit/next-sass')


module.exports =  withCSS(withSass({
  cssModules: true,
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    MONGODB: process.env.MONGODB
  }
}))