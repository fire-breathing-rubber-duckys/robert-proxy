const express = require('express');
const request = require('request');
const cors = require('cors');
const path = require('path');

const PORT = 3000;

const app = express();
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if (req.url.includes('featured')) {
    request(`http://localhost:3001${req.url}`)
      .on('error', (error) => console.log(error))
      .pipe(res);
  } else if (req.url.includes('viewed')) {
    request(`http://localhost:1337${req.url}`)
    .on('error', (error) => console.log(error))
    .pipe(res);
  } else if (req.url.includes('reviews')) {
    request(`http://localhost:3002${req.url}`)
    .on('error', (error) => console.log(error))
    .pipe(res);
  }
});


app.listen(PORT, () => {
  console.log(`Proxy Server Listening on PORT: ${PORT}`);
});


