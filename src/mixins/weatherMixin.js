import axios from "axios"

const weatherMixin = {
    data() {
        return {}
    },
    methods: {
        async getWeatherInfo(city) {
            const API_KEY = process.env.VUE_APP_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`
            const weather_res = await axios.get(url)
            const { main, wind, weather, coord } = weather_res.data
            const weatherResult = {
                label: city.label,
                code: city.code,
                temperature: this.displayTemperature(main.temp),
                humidity: main.humidity,
                wind: wind.speed,
                lon: coord.lon,
                lat: coord.lat,
                icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`
            }
            return weatherResult;
        },
        displayTemperature(temperature) {
            return (temperature - 273.15).toFixed(1)
        },
        async getAirInfo(city) {
            const API_KEY = process.env.VUE_APP_API_KEY
            const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}`
            const air_res = await axios.get(url)
            const { list } = air_res.data
            const airResult = {
                label: city.label,
                code: city.code,
                aqi: list[0].main.aqi
            }
            return airResult;

        }
    }
}

export default weatherMixin