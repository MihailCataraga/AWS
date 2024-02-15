const express = require('express');
const app = express();

// Ruta de bază
app.get('/', (req, res) => {
  res.json('My API ruuning')
});

// Pornirea serverului
app.listen(3000, () => {
  console.log(`Serverul rulează la adresa http://localhost:${3000}`);
});