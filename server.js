const HOST = '0.0.0.0' || process.env.HOST;
const PORT = 1337 || process.env.PORT;
const express = require('express');
const app = express();
app.use(express.static('./public'));
app.listen(PORT, HOST, () =>
  console.log(`Server listening on http://${HOST}:${PORT}/`)
);
