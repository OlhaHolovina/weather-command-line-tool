const axios = require("axios").default;

const town = process.argv[2];
if (!town) {
  console.log('Enter the town, please!');
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
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
