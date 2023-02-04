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
const Login = require('./views/Login');

// Подключение middleware, который отдаёт клиенту файлы из папки
app.use(express.static('public'));

// Роут, отвечающий на запрос GET /login
app.get('/login', (req, res) => {
  // Создание элемента main на основе компонента Login
  const login = React.createElement(Login, {});
  // Рендеринг React-элемента в HTML-строку
  const html = ReactDOMServer.renderToStaticMarkup(login);
  // Отправка первой строки HTML-документа
  res.write('<!DOCTYPE html>');
  // Отправка отрендеренного HTML и закрытие соединения
  res.end(html);
});

// Запуск сервера по порту 3000
app.listen(3000);
