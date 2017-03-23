const express = require('express')();
const fs = require('fs');
// const Pets = require('/.readPets.js')('pets.json');
let pets;

// prints out array and objects
express.get('/pets',  (req, res) => {
  fs.readFile('pets.json', 'utf8', (err, data) => {
    pets = JSON.parse(data);
    res.send(pets);
  });
});

// filter request by array index
express.get('/pets/:pet_id', (req, res) => {
  const id = req.params.pet_id;
  fs.readFile('pets.json', 'utf8', (err, data) => {
    pets = JSON.parse(data);
    if (pets[id] === undefined) {
      res.sendStatus(404);
    }
      res.send(pets[id]);
  });
});

express.listen(3000, () => {
  console.log("Server is up");
});
