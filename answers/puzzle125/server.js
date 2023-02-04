// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /json
app.get('/json', (req, res) => {
  // Отправляем в ответ JSON-объект
  res.json({
    message: 'Hello!',
  });
});

// Запуск сервера по порту 3000
app.listen(3000);
