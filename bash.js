process.stdout.write('prompt > ');

const export_pwd = require('./pwd');
const export_ls = require('./ls');
const export_cat = require('./cat');

let fileName;

const catFileName = process.stdin.on('data', (data) => {
  fileName = data.toString().trim().split(' ')[1];
});

module.exports = catFileName;
