export default (req, res) => {
  const max = 100;
  const min = 1;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return `<html>
      <head>
        <title>demo</title>
        <body>${randomNumber}</body>
      </head>
    </html>`;
};
