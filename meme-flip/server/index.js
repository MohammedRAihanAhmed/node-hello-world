// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/todays-memes", async (req, res) => {
    const axios = require('axios');
    
    axios.get('https://api.imgflip.com/get_memes')
    .then(res.json(response => {
      console.log(response.data);
      console.log(response.data);
    }))
    .catch(error => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
