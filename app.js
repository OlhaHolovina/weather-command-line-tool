const axios = require("axios").default;
const writeToLog = require("./writeToLog");

const town = process.argv[2];
if (!town) {
  const text = 'Enter the town, please!';
  console.log(text);
  writeToLog(text);
  process.exit();
}

const options = {
  method: 'GET',
  url: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${town}&days=1`,
  "headers": {
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    "x-rapidapi-key": "40da0fbf92mshfe7a448a5fbb967p17796ejsn5fe22c938fc1"
  }
};

axios.request(options).then(function (response) {
  const data = response.data;
  const text = `Weather in ${data.location.name}, ${data.location.region}, ${data.location.country}: ${data.current.temp_c}°, ${data.current.condition.text}`;
  console.log(text);
  writeToLog(text);
}).catch(function () {
  const text = 'error: no such town or something wrong with the request';
  console.error(text);
  writeToLog(text);
});
