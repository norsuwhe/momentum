class Weather {
    constructor() {
        this.input = document.querySelector('.weather__input')
        this.weather = {}
        this.weatherC = document.querySelector('.weather__celcius');
        this.weatherDescription = document.querySelector('.weather__description');
        this.weaterWind = document.querySelector('.weather__wind');
        this.weatherHumidity = document.querySelector('.weather__humidity')
        this.apiKey = '9d9e61098c301e3aad492453d782c39a'
        this.city = ''
        this.metric = 'units=metric'
        this.getLocalStorage()
        this.setEvents();
    }

    setLocalStorage = () => {
        localStorage.setItem('city', this.city);
    }

    getLocalStorage = () => {
        if (localStorage.getItem('city')) {
            this.city = localStorage.getItem('city')
            this.getWeather();
        } else {
            this.input.value = 'Minsk';
            this.city = 'Minsk'
            this.getWeather()
        }
    }

    changeCity = (e) => {
        this.city = e.target.value;
        this.setLocalStorage()
        this.getWeather();
    }

    getWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=en&appid=${this.apiKey}&${this.metric}`)
        this.weather = await response.json();
        this.updateWeather();
    }

    updateWeather = () => {
        this.input.value = this.city
        this.weatherC.textContent = `${Math.trunc(this.weather.main.temp)}°C`;
        this.weatherDescription.textContent = this.weather.weather[0].description;
        this.weaterWind.textContent = `Wind speed: ${Math.trunc(this.weather.wind.speed)}`;
        this.weatherHumidity.textContent = `Humidity: ${this.weather.main.humidity}`;
    }

    setEvents = () => {
        this.input.addEventListener('change', this.changeCity);
    }
}

const weather = new Weather();