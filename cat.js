const fs = require('fs');

const catFunc = process.stdin.on('data', (data, fileName) => {
  if (data.toString().trim() === 'cat') {
    fs.readFile('')
  }
});
