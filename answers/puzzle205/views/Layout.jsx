const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Фёдор-фермер</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
