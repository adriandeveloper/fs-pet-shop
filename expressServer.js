const express = require('express');
const app = express();
const fs = require('fs');
const Pets = require('./readPets')('pets.json');
let pets = Pets.petFile;


// return object of pets
app.get('/pets', (req, res) => {
  pets.then((data) => { res.send(data); });
});

// get single object from array index. Return not found if the index doesn't exist.
app.get('/pets/:pet_id', (req, res) => {
  const id = req.params.pet_id;
  pets.then((data) => {
    if (data[id]) {
      res.send(data[id]);
    } else {
      res.send('Invalid ID');
    }
   }).catch((err) => {
    console.log("broke. because.. reasons");
    res.sendStatus(404);
  });
});

app.listen(3000, () => {console.log("The server is running"); });
