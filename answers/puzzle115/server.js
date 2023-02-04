// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /query-as-object
app.get('/query-as-object', (req, res) => {
  // Отправляем в ответ req.query as is
  res.send(req.query);
});

// Запуск сервера по порту 3000
app.listen(3000);
