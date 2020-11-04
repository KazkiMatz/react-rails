module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: __dirname + "/dist/",
    filename: "react_ujs.js",
    library: "ReactRailsUJS",
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-dom/server': 'ReactDOMServer'
  }
};
