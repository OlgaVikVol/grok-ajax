const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ count }) {
  return (
    <Layout>
      <h1>Кусочек</h1>
      <div id="count">{count}</div>
      <button type="button">Следующий</button>
    </Layout>
  );
};
