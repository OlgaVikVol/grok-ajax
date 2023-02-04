# Задача 305

* Подними минимальный HTTP-сервер с помощью библиотеки `express`.
* Создай директорию `public`, внутри размести файл `style.css` в отдельной директории `styles`.
* В файле стиля создай стиль `body {background-color: #222;}`.
* Создай файл `logo.svg` в директории `public/images`.
* Внутри `logo.svg` пропиши
```xml
<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```
* Подключи директорию `public` как статику express.
* Создай компонент Layout и подключи файл стиля в нём.
* Создай React-компонент `Main.jsx` который выводит `<img src="/images/logo.svg"/>`.
* Создай роут `GET /`, который рендерит компонент `Main.jsx`.

Не нужно ничего лишнего.

Над каждой строчкой кода вставь комментарий, который описывает то, что делает эта строчка.
