 const pwdFunc = process.stdin.on('data', (data) => {
    if (data.toString().trim() === 'pwd') {
      process.stdout.write(process.cwd());
      process.stdout.write('\nprompt > ');
    }
  });

  module.exports = pwdFunc;