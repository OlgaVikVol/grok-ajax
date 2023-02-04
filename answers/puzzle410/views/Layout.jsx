const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Puzzle 410</title>
        <script defer src="/js/client.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
