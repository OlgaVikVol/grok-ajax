// Подключаем babel для работы с jsx
require('@babel/register');

// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Подключение библиотеки React
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Подключение React-компонента из папки views
const Main = require('./views/Main');

// Подключение middleware, который отдаёт клиенту файлы из папки
app.use(express.static('public'));

// Подключение middleware, который парсит JSON от клиента
app.use(express.json());

// Изначальное значение счетчика
app.locals.count = 0;

// Роут, отвечающий на запрос GET /
app.get('/', (req, res) => {
  // Создание элемента main на основе компонента Main
  const main = React.createElement(Main, app.locals);
  // Рендеринг React-элемента в HTML-строку
  const html = ReactDOMServer.renderToStaticMarkup(main);
  // Отправка первой строки HTML-документа
  res.write('<!DOCTYPE html>');
  // Отправка отрендеренного HTML и закрытие соединения
  res.end(html);
});

// Роут, отвечающий на запрос GET /next
app.get('/next', (req, res) => {
  app.locals.count += 1;
  return res.json({
    count: app.locals.count,
  });
});

// Запуск сервера по порту 3000
app.listen(3000);
