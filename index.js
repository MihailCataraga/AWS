const express = require('express');
const app = express();
const port = 3000;

// Ruta de bază
app.get('/', (req, res) => {
  res.send('Salut de la serverul Express!');
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});