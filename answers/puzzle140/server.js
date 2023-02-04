// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /login
app.get('/login', async (req, res) => {
  // Отправляем в ответ HTML-форму
  res.send(`
  <form name="login">
    <label>Логин: <input name="login" type="text" /></label>
    <label>Пароль: <input name="password" type="password" /></label>
    <button type="submit">Войти</button>
  </form>
  `);
});

// Запуск сервера по порту 3000
app.listen(3000);
