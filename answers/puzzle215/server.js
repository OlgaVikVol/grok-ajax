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
const Hello = require('./views/Hello');

// Подключение middleware, который парсит BODY от HTML-формы
app.use(express.urlencoded({ extended: true }));

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

// Роут, отвечающий на запрос POST /hello
app.post('/hello', (req, res) => {
  // Создание элемента main на основе компонента Main
  const hello = React.createElement(Hello, {
    // Передаём в компонент введённое имя
    name: req.body.name,
  });
  // Рендеринг React-элемента в HTML-строку
  const html = ReactDOMServer.renderToStaticMarkup(hello);
  // Отправка первой строки HTML-документа
  res.write('<!DOCTYPE html>');
  // Отправка отрендеренного HTML и закрытие соединения
  res.end(html);
});

// Запуск сервера по порту 3000
app.listen(3000);
