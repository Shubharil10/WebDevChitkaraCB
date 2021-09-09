let weather = {
    "apiKey": "3ef3118bb68f4b082639a1147a7b6d51",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        + "&units=metric&appid="
        + this.apiKey
     )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));

        
    },
    displayWeather: function name(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText ="Weather in " + name;
        document.querySelector(".icon").src =
         " https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°c";
        document.querySelector(".humidity").innerText = "Humidity: "+ humidity  + "%";
        document.querySelector(".wind").innerText = "Wind speed:" + speed +"Km/hr";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
    
})
weather.fetchWeather("Chandigarh");
