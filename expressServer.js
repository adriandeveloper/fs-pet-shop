const express = require('express');
const app = express();
const fs = require('fs');
let pets;

fs.readFile('pets.json', 'utf8', (err, data) => {
  pets = JSON.parse(data);
});

app.get('/pets', (req, res) => {
  res.send(pets);
});

app.get('/pets/:pet_id', (req, res) => {
  let id = req.params.pet_id;
  if (pets[id] === undefined) {
    res.sendStatus(404);
  }
    res.send(pets[id]);
});

app.listen(3000, () => {
  console.log("Your server is running!");
});
module.exports = app;
