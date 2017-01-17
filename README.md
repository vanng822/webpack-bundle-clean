# webpack-bundle-clean

Use together with https://github.com/owais/webpack-bundle-tracker

# Usage

```javascript
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const BundleClean = require('webpack-bundle-clean');

module.exports = {
    entry: {
      index: './assets/js/index'
    },
    output: {
        path: './public/dist/js/',
        filename: '[hash].js',
        publicPath: '/assets/dist/js/'
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              plugins: [],
              presets: ['es2015', 'react']
            }
          }
        ]
    },
    plugins: [
      new BundleClean({path: __dirname, filename: './run/webpack-stats.json'}),
      new BundleTracker({path: __dirname, filename: './run/webpack-stats.json', indent: '  '})
    ]
}
```
