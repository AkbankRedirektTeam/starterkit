module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        debug: false,
        targets: {
          node: "current",
          browsers: ["last 3 versions"]
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],
    [
      "@babel/plugin-proposal-private-property-in-object",
      {
        loose: true
      }
    ],
    [
      "@babel/plugin-proposal-private-methods",
      {
        loose: true
      }
    ],
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-transform-arrow-functions"
  ]
}
