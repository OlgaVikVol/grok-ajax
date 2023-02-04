const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Puzzle 305</title>
        <link rel="stylesheet" href="/styles/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
