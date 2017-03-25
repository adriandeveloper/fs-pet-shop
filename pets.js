const fs = require('fs');
const path = require('path');
const cmd = process.argv[2];
const index = parseInt(process.argv[3]);
const petsFile = path.join(__dirname, 'pets.json');
// console.error("Usage: node pets.js [read | create | update | destroy]");

if (cmd === 'read' && process.argv[3] === undefined) {
  fs.readFile(petsFile, 'utf8', (err, data) => {
    if (err) throw err;
    const Pets = JSON.parse(data);
    console.log(data);
  });
}
else if (cmd === 'read') {
  fs.readFile(petsFile, 'utf8', (err, data) => {
    if (err) throw err;
    const Pets = JSON.parse(data);
    console.log(Pets[index]);
  });

}
