const React = require('react');

module.exports = function Main() {
  return (
    <form name="hello" action="/hello">
      <label>Имя:<input name="name" type="text" /></label>
      <button type="submit">Поприветствовать</button>
    </form>
  );
};
