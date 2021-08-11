module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
