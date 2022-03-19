const fs = require('fs');

const writeToLog = (text) => {
  try {
    fs.writeFileSync("log.txt", `${text}\n\n`);
  } catch (e) {
    console.log('check the script, something wrong with writing in the logs!');
    console.log(e.message);
  }
}

module.exports = writeToLog;