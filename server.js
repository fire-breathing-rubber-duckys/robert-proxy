const express = require('express');
const request = require('request');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const reRouter = require('./reRouter');

const PORT = 3000;

const app = express();
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));


app.use(reRouter);

app.listen(PORT, () => {
  console.log(`Proxy Server Listening on PORT: ${PORT}`);
});


