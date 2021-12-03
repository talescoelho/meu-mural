const express = require('express');
const app = express();
const user = require('./routes/users');
const post = require('./routes/posts');
require('dotenv').config();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/', user)
app.use('/', post);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
