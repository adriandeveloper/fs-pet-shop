const fs = require('fs');

module.exports = function readJson (filename) {
  return {
    petFile: new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf8', (err ,data) =>{
        let pets = JSON.parse(data);
        err ? reject(err) : resolve(pets);
        // if (err) {
        //   reject(err);
        // }
        // resolve(pets);
      });
    }),
  };
};
