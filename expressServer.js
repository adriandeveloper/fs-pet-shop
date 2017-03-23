const express = require('express');
const app = express();
const fs = require('fs');
let pets;

// read and parse 'pets.json' file
fs.readFile('pets.json', 'utf8', (err, data) => {
  pets = JSON.parse(data);
});

// gets the '/pets' array
app.get('/pets', (req, res) => {
  res.send(pets);
});

// returns a specific pets object by having the user specify the pet's array index
app.get('/pets/:pet_id', (req, res) => {
  const id = req.params.pet_id;
  // if the pet index is not available, return 404, else return the object at the specified index
  if (pets[id] === undefined) {
    res.sendStatus(404);
  }
    res.send(pets[id]);
});

// allow the user to add to the 'pets.json' file
app.post('/pets', (req, res) => {
  res.send(pets);
});


// use port 3000 to listen for changes
app.listen(3000, () => {
  console.log("Your server is running!");
});
module.exports = app;
