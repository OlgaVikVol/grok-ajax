const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <form name="login">
        <label>Логин: <input name="login" type="text" /></label>
        <label>Пароль: <input name="password" type="password" /></label>
        <button type="submit">Войти</button>
      </form>
    </Layout>
  );
};
