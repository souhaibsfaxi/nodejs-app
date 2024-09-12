
const express = require('express');


const app = express();


app.get('/', (req, res) => {
  res.send('Hello, Maison Du Web!');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});