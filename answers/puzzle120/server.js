// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /answer
app.get('/answer', (req, res) => {
  // Отправляем в ответ 42
  res.send(String(42));
});

// Запуск сервера по порту 3000
app.listen(3000);
