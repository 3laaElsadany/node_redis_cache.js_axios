const express = require('express');
const app = express();
require('dotenv').config();
const {
  getRepos,
  cache
} = require("./controllers/controller")



app.get('/repos/:username', cache, getRepos)

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})