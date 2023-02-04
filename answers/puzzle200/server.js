// Подключаем babel для работы с jsx
require('@babel/register');

// Подключение библиотеки express
const express = require('express');

// Подключение библиотеки React
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Подключение React-компонента из папки views
const Main = require('./views/Main');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /
app.get('/', (req, res) => {
  // Создание элемента main на основе компонента Main
  const main = React.createElement(Main, {});
  // Рендеринг React-элемента в HTML-строку
  const html = ReactDOMServer.renderToStaticMarkup(main);
  // Отправка первой строки HTML-документа
  res.write('<!DOCTYPE html>');
  // Отправка отрендеренного HTML и закрытие соединения
  res.end(html);
});

// Запуск сервера по порту 3000
app.listen(3000);
