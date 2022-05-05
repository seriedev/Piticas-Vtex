const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
//analyze bundle size
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const storeJsDesktopPath = './src/js/pages';
const storeSassDesktopPath = './src/scss';
const accountName = 'lojapiticas';
const isProduction =
  process.env.NODE_ENV == 'production' ? 'production' : 'development';

// Our function that generates our html plugins
function generateHtmlPlugins(templateDir) {
  // Read files in template directory
  let templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  // remove patials folder
  templateFiles.splice(
    templateFiles.findIndex((e) => e === 'partials'),
    1
  );

  return templateFiles.map((item) => {
    const parts = item.split('.');
    const name = parts[0];
    const fileName = parts[0].split('-')[0];
    const extension = parts[1];
    // Create new HTMLWebpackPlugin with options

    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      title: `${name}.html`,
      // template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
      template: `!!ejs-webpack-loader!${templateDir}/${name}.${extension}`,
      chunks: ['general', `${fileName}`],
      inject: isProduction === 'production' ? false : true,
      minify: {
        preserveLineBreaks: true,
        keepClosingSlash: true,
        caseSensitive: true,
        removeComments:true,
        ignoreCustomFragments: [ /<vtex[\s\S]*?\/>/, /<svg[\s\S]*?\/svg>/ ]
      },
    });
  });
}

// Our function that generates our html subtemplates plugins
function generatePartialsHtml(templateDir) {
  // Read files in template directory
  let templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  const distFolder = templateDir.split('/').slice(-1)[0];
  return templateFiles.map((item) => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    // Create new HTMLWebpackPlugin with options
    return new HtmlWebpackPlugin({
      filename: `${distFolder}/${name}.html`,
      template: `!!ejs-webpack-loader!${templateDir}/${name}.${extension}`,
      inject: false,
      chunks: false,
      minify: {
        preserveLineBreaks: true,
        keepClosingSlash: true,
        caseSensitive: true,
        removeComments:true,
        ignoreCustomFragments: [ /<vtex[\s\S]*?\/>/, /<svg[\s\S]*?\/svg>/ ]
      }
    });
  });
}

function generateEntries(templateDir) {
  // build static entries:

  const entries = {};

  entries.general = [`./src/js/App.js`, './src/scss/main.scss'];
  entries.account = [`${storeSassDesktopPath}/pages/account/index.scss`];
  entries.system = [`${storeSassDesktopPath}/pages/system/index.scss`];

  // Read files in template directory
  let templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  // remove patials folder
  templateFiles.splice(
    templateFiles.findIndex((e) => e === 'partials'),
    1
  );

  templateFiles.map((item) => {
    if (item[0] != '.') {
      const parts = item.split('.');
      const name = parts[0];
      const fileName = parts[0].split('-')[0];
      entries[fileName] = [
        `${storeJsDesktopPath}/${fileName}/index.js`,
        `${storeSassDesktopPath}/pages/${fileName}/index.scss`,
      ];
    }
  });
  
  return entries;
}

// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('src/templates');
const subtemplatesHtml = generatePartialsHtml('src/templates/partials/subtemplates');
const shelvesHtml = generatePartialsHtml('src/templates/partials/shelves');
const entries = generateEntries('src/templates');

module.exports = {
  mode: isProduction,
  devtool: isProduction === 'production' ? false : 'source-map',
  stats: 'minimal',
  entry: entries,
  output: {
    filename: `arquivos/frn.${accountName}.[name].js`,
    path: `${__dirname}/dist`,
    jsonpFunction: 'wpJsonpFRN',
  },
  devServer: {
    index: 'home.html',
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 1337,
    https: true, // chrome may need this flag 'enabled' -> chrome://flags/#allow-insecure-localhost
    proxy: {
      '**': {
        target: `https://${accountName}.myvtex.com/`,
        changeOrigin: true,
        headers: {
          'X-Dev-Server-Proxy': `https://${accountName}.myvtex.com/`,
        },
      },
    },
  },
  module: {
    noParse: /jquery|lodash|sweetalert2|hammerjs|pretty-checkbox/,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: isProduction === 'production' ? false : true,
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isProduction === 'production' ? false : true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `arquivos/frn.${accountName}.[name].css`,
      chunkFilename: `arquivos/frn.${accountName}.[name].css`,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/img', to: 'arquivos' }],
    }),
    // new BundleAnalyzerPlugin()
  ]
  // We join our htmlPlugin array to the end
  // of our webpack plugins array.
  .concat(htmlPlugins)
  .concat(subtemplatesHtml)
  .concat(shelvesHtml),
  optimization: {
    // runtimeChunk: 'single',
    // moduleIds: 'hashed',
    minimizer: [
      // new UglifyJSPlugin({
      //   uglifyOptions: {
      //     mangle: isProduction === 'production' ? true : false,
      //     compress: {
      //       drop_console: true,
      //     },
      //   },
      //   cache: true,
      //   parallel: true,
      //   sourceMap: isProduction === 'production' ? false : true,
      // }),
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          mangle: isProduction === 'production' ? true : false,
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true,
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/js/components'),
      Helpers: path.resolve(__dirname, 'src/js/helpers'),
      Services: path.resolve(__dirname, 'src/js/services'),
    },
  },
};
