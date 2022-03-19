fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=1`, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    "x-rapidapi-key": "40da0fbf92mshfe7a448a5fbb967p17796ejsn5fe22c938fc1"
  }
})