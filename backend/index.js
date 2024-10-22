(async () => {
  const { default: open } = await import('open');
  const express = require('express');
  const app = express();
  const PORT = 3000;

  app.get('/', (req, res) => {
      res.send('Welcome to the PAW MailMerge app!');
  });

  app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      open(`http://localhost:${PORT}`); // Open the browser automatically
  });
})();
