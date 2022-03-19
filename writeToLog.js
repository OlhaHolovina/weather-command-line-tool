const fs = require('fs');

const writeToLog = (text) => {
  try {
    const path = "log.txt";
    const data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
    const date = new Date();
    fs.writeFileSync(path, `${data}${date}: ${text}\n`);
  } catch (e) {
    console.log('check the script, something wrong with writing in the logs!');
    console.log(e.message);
  }
}

module.exports = writeToLog;