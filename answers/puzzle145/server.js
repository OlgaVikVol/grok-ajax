// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Подключение middleware, который парсит BODY от HTML-формы
app.use(express.urlencoded({ extended: true }));

// Роут, отвечающий на запрос GET /login
app.get('/login', async (req, res) => {
  // Отправляем в ответ HTML-форму
  res.send(`
  <form name="login" method="POST">
    <label>Логин: <input name="login" type="text" /></label>
    <label>Пароль: <input name="password" type="password" /></label>
    <button type="submit">Войти</button>
  </form>
  `);
});

// Роут, отвечающий на запрос POST /login
app.post('/login', (req, res) => {
  // Вытаскиваем логин и пароль из формы с помощью деструктуризации body
  const { login, password } = req.body;
  // Проверяем, что пользователь ввёл корректные данные
  if (login === 'fedor' && password === '123456') {
    // Отправляем ответ о том, что пользователь смог войти
    return res.send('Вы вошли в систему!');
  }
  // Если данные пользователя некорректные, то говорим ему об этом
  return res.send('Неверные учётные данные!');
});

// Запуск сервера по порту 3000
app.listen(3000);
