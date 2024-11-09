const path = require('path');

module.exports = {
  entry: './src/index.js', // Путь к вашему исходному файлу
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сгенерированных файлов
    filename: 'bundle.js', // Имя итогового файла
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Использование Babel для компиляции JS
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader', // Компиляция SCSS в CSS
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Для CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Для изображений
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Путь к статическим файлам
    compress: true,
    port: 4001, // Порт для запуска Dev Server
    open: true, // Открывать браузер при старте сервера
    historyApiFallback: true, // Поддержка React Router
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Расширения для файлов
  },
};
